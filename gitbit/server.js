require('dotenv').config();

const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const sgMail = require('@sendgrid/mail');

const { request, gql } = require('graphql-request');
const moment = require('moment');

const app = express();
app.use(cors());
app.use(express.json());



















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
  }
});
const User = mongoose.model('User', userSchema);

























// ------ Session middleware to keep track of user info. Expires when the page is closed ------------------

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());














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
            ...contributionCalendar,   // Store the contribution calendar
            totalRepositories          // Store the total number of repositories
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
      return done(null, user);
    } catch (error) {
      console.error('Error saving GitHub profile to MongoDB:', error);
      return done(error, null);
    }
  }
));






























//---------  Passport session handling -------------------------------------------

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
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
            totalRepositories
          }
        }
      });
      //console.log(`Contributions updated for user ${username}`);
    } catch (error) {
      console.error('Error during polling contributions:', error);
    }
  }, 5000);
}


























// ROUTES
// ------

app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

app.get('/auth/github/callback', (req, res, next) => {
  passport.authenticate('github', (err, user, info) => {
    if (err) {
      console.error('Authentication error:', err);  
      return next(err); 
    }
    if (!user) {  
      console.error('Authentication failed:', info); 
      return res.status(401).send('Authentication failed, please try again.');
    }

    
    // If authentication is successful, log the user in manually
    req.logIn(user, (loginErr) => {
      if (loginErr) {
        console.error('Login error:', loginErr);
        return next(loginErr);
      }

      const contributions = user.contributions.totalContributions;
      const repositories = user.contributions.totalRepositories;
      const accessToken = process.env.GITHUB_ACCESS_TOKEN;

      
      res.redirect(`http://localhost:5173/accounts?message=login-success&username=${user.username}&profileImg=${user.profileImageUrl}&contributions=${contributions}&repositories=${repositories}&token=${accessToken}`);
      //res.redirect('https://gitbit.netlify.app/accounts?message=login-success&username=' + user.username + '&profileImg=' + user.profileImageUrl);



    });
  })(req, res, next);
});




app.get('/api/userdata', async (req, res) => {
  if (!req.user) {
    console.log('User not found:', req.session);
    return res.status(401).json({ message: 'User not recognised' });
  }

  try {
    const user = await User.findById(req.user._id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' }); 
    }

    const { username, profileImageUrl, contributions, repositories } = user;
    const yesterdayContributions = contributions.weeks.slice(-1)[0]?.contributionDays.slice(-1)[0]?.contributionCount || 0;

    res.status(200).json({
      username,
      profile: profileImageUrl,
      contributions: contributions.totalContributions,
      repositories,
      yesterday: yesterdayContributions,
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Server error' });
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
