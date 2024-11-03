require('dotenv').config();

const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const cors = require('cors');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const sgMail = require('@sendgrid/mail');
const jwt = require('jsonwebtoken');

const { request, gql } = require('graphql-request');
const moment = require('moment');

const app = express();


















// ---------------------- Configuring with graphql ------------------------------------------------------------------

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

async function getGitHubContributions(accessToken, username) {

  const query = gql`
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              color
            }
          }
        }
      }
      repositories {
        totalCount
      }
    }
  }
`;


  const variables = { username };

  try {
    const data = await request(GITHUB_GRAPHQL_API, query, variables, {
      Authorization: `Bearer ${accessToken}`,
    });
    
    const  contributionCalendar = data.user.contributionsCollection.contributionCalendar;
    const totalRepositories = data.user.repositories.totalCount;

    // Get yesterday's date in YYYY-MM-DD format
    const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');
    let yesterdayContributions = 0;
    contributionCalendar.weeks.forEach(week => {
      week.contributionDays.forEach(day => {
        if (day.date === yesterday) {
          yesterdayContributions = day.contributionCount;
        }
      });
    });



    return { contributionCalendar, totalRepositories, yesterdayContributions };
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    throw error;
  }
}

































//------------------- MongoDB connection -----------------------------------------------

async function connectToDatabase() {
    const uri = process.env.MONGODB_URI;
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Connection error:', err);
    }
}
connectToDatabase();












// ----------------Mongoose user model --------------------------------------------

const userSchema = new mongoose.Schema({
  githubId: String,
  username: String,
  displayName: String,
  emails: [{ value: String }],
  profileUrl: String,
  profileImageUrl: String,
  contributions: {
    totalContributions: Number,
    totalRepositories: Number,
    weeks: [
      {
        contributionDays: [
          {
            date: String,
            contributionCount: Number,
            color: String
          }
        ]
      }
    ]
  },
  goal: {
    goalId: Number,
    goalName: String,
    Target: Number,
    Progress: Number,
  }
});
const User = mongoose.model('User', userSchema);
































// --------------------------------------------- MIDDLEWARES SECTION -----------------------------------------------------------------
// --------------------------------------------- MIDDLEWARES SECTION -----------------------------------------------------------------
// --------------------------------------------- MIDDLEWARES SECTION -----------------------------------------------------------------


app.use(cors());
app.use(express.json());



// ------ Session middleware to keep track of user auth info. Expires when the page is closed ------------------
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    collectionName: 'sessions'
  })
}));

app.use(passport.initialize());
app.use(passport.session());








// -------------- Custom middleware to verify JWT token --------------------------------------------------------

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    req.user = decoded; // Attach the decoded user info to the request
    next(); // Proceed to the next middleware
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};








































// ------ Configuring Passport.js with GitHub strategy --------------------------

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "https://git-bit.glitch.me/auth/github/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    try {

      // Check if the user already exists in MongoDB
      let user = await User.findOne({ githubId: profile.id });

      // Fetch user's GitHub contribution graph data and repository numbers
      const { contributionCalendar, totalRepositories, yesterdayContributions } = await getGitHubContributions(accessToken, profile.username);

      // If the user does not exist, create a new one
      if (!user) {
        user = new User({
          githubId: profile.id,
          username: profile.username,
          displayName: profile.displayName,
          emails: profile.emails,
          profileUrl: profile.profileUrl,
          profileImageUrl: profile.photos[0].value,
          contributions: {
            ...contributionCalendar,
            totalRepositories
          },
          goal: {
            goalId: 0,
            goalName: "None",
            Target: 0,
            Progress: 0
          }
        });
        await user.save();
      } else if (user) {        // If the user exists, update the prev data from mongodb with current from github
        user.username = profile.username;
        user.displayName = profile.displayName;
        user.emails = profile.emails;
        user.profileUrl = profile.profileUrl;
        user.profileImageUrl = profile.photos[0].value;
        user.contributions = {
          ...contributionCalendar,
          totalRepositories
        };
        await user.save();  
      }
     

      // Start polling for updates
      startPollingContributions(accessToken, profile.username, user._id);


      // Return the user
      return done(null, { user, yesterdayContributions });
    } catch (error) {
      console.error('Error saving GitHub profile to MongoDB:', error);
      return done(error, null);
    }
  }
));






























//---------  Passport session handling -------------------------------------------

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    if (user) {
      //console.log("User found during deserialization:", user.username);
      done(null, user);
    } else {
      //console.log("User not found during deserialization");
      done(null, null);
    }
  } catch (error) {
    done(error, null);
  }
});









// --------- Polling method (consistent github updates) ---------------------------------------------

function startPollingContributions(accessToken, username, userId) {
  setInterval(async () => {
    try {
      const { contributionCalendar, totalRepositories } = await getGitHubContributions(accessToken, username);

      // Update the MongoDB database with the latest data
      await User.findByIdAndUpdate(userId, {
        $set: {
          contributions: {
            ...contributionCalendar,
            totalRepositories,
          }
        }
      });
      //console.log(`Contributions updated for user ${username}`);]
    } catch (error) {
      console.error('Error during polling contributions:', error);
    }
  }, 5000);
}


























// ROUTES
// ------


// --------- Authentication route ---------------------------------------------------------------------

app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

app.get('/auth/github/callback', (req, res, next) => {
  passport.authenticate('github', (err, result, info) => {
    if (err) {
      console.error('Authentication error:', err);  
      return next(err); 
    }
    if (!result || !result.user) {  
      console.error('Authentication failed:', info); 
      return res.status(401).send('Authentication failed, please try again.');
    }

    const { user, yesterdayContributions } = result;

    
    // If authentication is successful, log the user in manually
    req.logIn(user, (loginErr) => {
      if (loginErr) {
        console.error('Login error:', loginErr);
        return next(loginErr);
      }

      const yesterday = yesterdayContributions;
      const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.redirect(`http://localhost:5173/accounts?message=login-success&token=${token}&yesterday=${yesterday}`);
      //res.redirect(`https://gitbit.netlify.app/accounts?message=login-success&token=${token}&yesterday=${yesterday}`);

    });
  })(req, res, next);
});

























// --------- Auto fetching route ---------------------------------------------------------------------

app.get('/fetchdata', verifyToken, async (req, res) => {
  try {
    // Fetch user data from MongoDB using the user ID from the token
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the username and number of contributions
    res.status(200).json({
      username: user.username,
      profile: user.profileImageUrl,
      repositories: user.contributions.totalRepositories,
      contributions: user.contributions.totalContributions,
      calendar: user.contributions.weeks,
      goal: user.goal
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});







/* ---------- Add and Delete goal ------------------------------------------------------------------- */

app.post('/api/addgoal', async (req, res) => {
  const { username, goal } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.goal = {
      goalId: goal.goalId,
      goalName: goal.goalName,
      Target: goal.Target,
      Progress: goal.Progress
    };
    await user.save();

    res.status(200).json({ goal: user.goal });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add goal' });
  }
});




app.delete('/api/deletegoal', async (req, res) => {
  const { username, goalId } = req.body;

  try {
      const user = await User.findOne({ username });
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      if (user.goal && user.goal.goalId === goalId) {
        // Set the goal field to null or an empty object
        user.goal = {
          goalId: 0,
          goalName: "None",
          Target: 0,
          Progress: 0
        };

        await user.save();

        return res.status(200).json({ message: 'Goal deleted successfully' });
      } else {
        return res.status(404).json({ error: 'Goal not found' });
      }

  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete goal' });
  }
});




app.put('/api/renewgoal', async (req, res) => {
  const { username, goalId } = req.body;

  try {
      const user = await User.findOne({ username });
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      if (user.goal && user.goal.goalId === goalId) {
        user.goal.Progress = 0;

        await user.save();

        return res.status(200).json({ message: 'Goal renewed successfully' });
      } else {
        return res.status(404).json({ error: 'Goal not found' });
      }

  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to renew goal' });
  }
});



















// Send Email message ------------------------------------------

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/submit', async (req, res) => {

  const { Name, Email, Subject, Message } = req.body;
  const msg = {
    to: 'shemaremy2003@gmail.com',
    from: 'remyshema20@gmail.com',
    subject: `GitBit Submission: ${Subject}`,
    html: `
      <p><strong>Name:</strong> ${Name}</p>
      <p><strong>Email:</strong> ${Email}</p>
      <p><strong>Message:</strong> ${Message}</p>
    `
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Message has been sent successfully.' });
  }
  catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});






// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
