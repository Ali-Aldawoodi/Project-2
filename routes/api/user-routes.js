const router = require('express').Router();
const { Users, Reviews } = require('../../models');
const withAuth = require('../../utils/auth')

// The `/api/users` endpoint

// GET all users
router.get('/', async (req, res) => {
  try {
    const userData = await Users.findAll({
      include: [
        {
          model: Reviews,
          attributes: ['id', 'tutors_id', 'reviews_content'],
        },
      ],
    });
    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// GET one category
router.get('/:id', async (req, res) => {
  try {
    const userData = await Users.findByPk(req.params.id, {
      include: [
        {
          model: Reviews,
          attributes: ['id', 'tutors_id', 'reviews_content'],
        },
      ],
    });
    if (!userData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// POST/Create new User
router.post('/', async (req, res) => {
  try {
    const userData = await Users.create({
      users_name: req.body.users_name,
      email: req.body.email,
      users_password: req.body.users_password,
    });
    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});


// ** COMING SOON**
// PUT/Update one User
router.put('/:id', withAuth, async (req, res) => {
  try {
    const userToUpdate = await Users.findByPk(req.params.id);
    if (!userToUpdate) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    await userToUpdate.update(req.body);
    res.status(200).json(userToUpdate);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});


// ** COMING SOON **
// DEL/Delete one user
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const userId = req.params.id;
    const userToDelete = await Users.findByPk(userId);
    if (!userToDelete) {
      res.status(404).json({ message: 'No User found with this id' });
      return;
    }

    // Find reviews associated with the User, and disassociate them from the from the user for safe deletion
    const associatedReviews = await Reviews.findAll({
      where: {
        category_id: userId,
      },
    });
    for (const review of associatedReviews) {
      review.category_id = null;
      await review.save();
    }
    await userToDelete.destroy();
    res.status(200).json({ message: 'User and associated Reviews have been deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// Added Login and Logout routes 
router.post('/login', async (req, res) => {
  try {
    const userData = await Users.findOne({ where: { users_name: req.body.username } });

    if (!userData) {
      return res.status(400).json({ message: 'Incorrect username or password, please try again' });
    }

    const validPassword = userData.checkPassword(req.body.password);
    // console.log(validPassword);

    if (!validPassword) {
      return res.status(400).json({ message: 'Incorrect username or password, please try again' });
    }

    // Redirect to the homepage upon successful login
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      // Redirect to the homepage route
      console.log('redirecting to homepage')
      res.redirect('/homepage');
    });
  } catch (err) {
    res.status(420).json(err);
  }
});

router.post('/logout', (req, res) => {
  console.log('log out route');

  if (req.session.loggedIn = true) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    console.log("You are not logged in!!!!!");
    res.status(404).end();
  }
});

module.exports = router;
