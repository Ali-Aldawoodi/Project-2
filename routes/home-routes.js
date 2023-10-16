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
      // console.log(tutors)
      const reviews = reviewData.map((review) => review.get({ plain: true }));
      res.render('homepage', {
        tutors,
        loggedIn: req.session.loggedIn
        // if we uncomment below then it will render all reviews right away. Do we want that?
        reviews,
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
    // console.log('Reviews:', reviews)
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
  res.render('login');
});

router.get('/chat', async (req, res) => {
  const chatUsername = await Users.findByPk(req.session.user_id);
  const loggedUser = chatUsername.dataValues.users_name
  res.render('chat', { loggedUser });
});

router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Reviews.findAll({
      // Include necessary associations here, e.g., the user data
      include: [{ model: Users }],
    });
    res.render('reviews', { reviews }); // Pass the reviews data to the template
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// req.session.user_id give me the id of the user that's logged in
// With that id, I can return the name in users table
// I need to acces the database with the user id

// http://localhost:3001/api/users/2
// {
// 	"id": 2,
// 	"users_name": "Trinh Nguyen",
// 	"users_email": "trinh@m.com",
// 	"users_password": "$2b$10$D2nhUI4CUu2mEzy6gV/ti.qn7gT77yOgE8J2N..Qb1UwCqxAaby/q",
// 	"createdAt": "2023-10-13T03:49:01.000Z",
// 	"updatedAt": "2023-10-13T03:49:01.000Z",
// 	"reviews": [
// 		{
// 			"id": 2,
// 			"users_id": 2,
// 			"reviews_content": "testuser1 was literally the worst tutor datty ever!"
// 		}
// 	]
// }




module.exports = router;
