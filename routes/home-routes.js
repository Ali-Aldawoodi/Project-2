const express = require('express');
const router = express.Router();

router.get('/profile', (req,res)=> {
  res.render('homepage')
});

router.get('/', (req,res)=> {
  res.render('homepage')
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

module.exports = router;
