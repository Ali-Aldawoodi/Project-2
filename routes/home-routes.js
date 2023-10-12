const express = require('express');
const session = require('express-session');
const router = express.Router();

router.get('/homepage', (req, res) => {
  res.render('homepage')
});

router.get('/', (req, res) => {
  res.render('homepage')
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/chat', (req, res) => {
  const chatUsername = session.username;
  res.render('chat');
})

module.exports = router;
