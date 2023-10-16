const express = require('express');
const session = require('express-session');
const router = express.Router();
const { Tutors, Reviews, Users } = require('../models')


router.get('/homepage', async (req, res) => {
  try {

    const tutorData = await Tutors.findAll({
      attributes: ['tutors_name', 'id']
    });

    const tutors = tutorData.map((tutor) => tutor.get({ plain: true }));

    try {

      const reviewData = await Reviews.findAll({
        attributes: ['reviews_content']
      });
      console.log(tutors)
      const reviews = reviewData.map((review) => review.get({ plain: true }));
      res.render('homepage', {
        tutors,
        // if we uncomment below then it will render all reviews right away. Do we want that?
        // reviews,
      });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }


});

//localhost:3001/:id
//localhost:3001/api/reviews/:id
router.get('/homepage/:id', async (req, res) => {
  const tutorBtn = req.params.id;

  try {

    const tutorData = await Tutors.findAll({
      attributes: ['tutors_name', 'id']
    });

    const tutors = tutorData.map((tutor) => tutor.get({ plain: true }));

    const data = await Reviews.findAll({
      where: {
        id: tutorBtn,
      }

    })
    const reviews = data.map((review) => review.get({ plain: true }));
    console.log('Reviews:', reviews)
    res.render('homepage', { tutors, reviews });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/homepage');
    return;
  }
  res.render('login', { logged_in: false }); // Pass the logged_in variable
});

router.get('/chat', async (req, res) => {
  const chatUsername = await Users.findByPk(req.session.user_id);
  const loggedUser = chatUsername.dataValues.users_name
  console.log(loggedUser);
  res.render('chat', { loggedUser });
});

module.exports = router;
