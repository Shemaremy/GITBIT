require('dotenv').config();

const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const sgMail = require('@sendgrid/mail');

const { request, gql } = require('graphql-request');

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
      }
    }
  `;

  const variables = { username };

  try {
    const data = await request(GITHUB_GRAPHQL_API, query, variables, {
      Authorization: `Bearer ${accessToken}`,
    });
    return data.user.contributionsCollection.contributionCalendar;
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
    profileImageUrl: String
});
const User = mongoose.model('User', userSchema);















// ------ Session middleware to keep track of user info. Expires when the page is closed ------------------

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
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

      // If the user does not exist, create a new one
      if (!user) {
        user = new User({
          githubId: profile.id,
          username: profile.username,
          displayName: profile.displayName,
          emails: profile.emails,
          profileUrl: profile.profileUrl,
          profileImageUrl: profile.photos[0].value
        });
        await user.save();
      }


      // Fetch user's GitHub contribution graph data
      const contributions = await getGitHubContributions(accessToken, profile.username);
     
      // Attach contributions to req so it can be accessed later
      user.contributions = contributions;



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

















// ROUTES
// ------

app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

app.get('/auth/github/callback', (req, res, next) => {
  passport.authenticate('github', (err, user, info) => {
    if (err) {
      console.error('Authentication error:', err);  // Log the error to the console
      return next(err);  // Handle the error (you could also return a response if needed)
    }
    if (!user) {  
      console.error('Authentication failed:', info);  // Log failure information
      return res.status(401).send('Authentication failed, please try again.');
    }
    
    // If authentication is successful, log the user in manually
    req.logIn(user, (loginErr) => {
      if (loginErr) {
        console.error('Login error:', loginErr);
        return next(loginErr);
      }
      // Redirect to the React app on successful login
      res.redirect('http://localhost:5173/accounts?message=login-success&username=' + user.username + '&profileImg=' + user.profileImageUrl);
      //res.redirect('https://gitbit.netlify.app/accounts?message=login-success&username=' + user.username);
      
      
      
      // const contributions = req.user.contributions;
      // res.redirect(
      //   `http://localhost:5173/accounts?message=login-success&username=${user.username}&profileImg=${user.profileImageUrl}&contributions=${encodeURIComponent(JSON.stringify(contributions))}`
      // );
    });
  })(req, res, next);
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
