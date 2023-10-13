const express = require('express');
const session = require('express-session');
const router = express.Router();
const { Tutors, Reviews } = require('../models')

router.get('/homepage', (req, res) => {
  res.render('homepage')
});


router.get('/', async (req, res) => {
 
  try {
 
    const tutorData = await Tutors.findAll({
    attributes: ['tutors_name']
    });
    
    const tutors = tutorData.map((tutor) => tutor.get({ plain: true }));
  
    res.render('homepage', {
        tutors,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/', async (req, res) => {

  try {

    const ReviewData = await Reviews.findAll({
    attributes: ['reviews_content']
    });

    const reviews = ReviewData.map((review) => review.get({ plain: true }));

    res.render('homepage', {
        reviews,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/homepage');
    return;
  }

  res.render('login');
});

router.get('/chat', (req, res) => {
  console.log(req.session.user_id);
  const chatUsername = req.session.user_id;
  res.render('chat', {chatUsername});
})



module.exports = router;
