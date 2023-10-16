const router = require('express').Router();
const { Tutors, Reviews } = require('../../models');
const withAuth = require('../../utils/auth')

// The `/api/Tutors` endpoint

// GET all Tutors
router.get('/', async (req, res) => {
  try {
    const tutorData = await Tutors.findAll({});
    console.log(tutorData)
    res.status(200).json(tutorData);
  } catch (err) {
    console.log("uno");
    res.status(500).json(err)
  }
});

// GET one tutors
router.get('/:id', async (req, res) => {
  try {
    const tutorData = await Tutors.findByPk(req.params.id, {    });
    if (!tutorData) {
      res.status(404).json({ message: 'No tutors found with this id' });
      return;
    }
    res.status(200).json(tutorData);
  } catch (err) {
    console.log("dos");
    res.status(500).json(err)
  }
});


// POST/Create new tutors
router.post('/', withAuth, async (req, res) => {
  try {
    const { users_id, Tutors_content, poster_id } = req.body; // Destructure the data from the request body

    // Create the tutors using Tutors model and the provided data
    const tutorData = await Tutors.create({
      users_id,
      Tutors_content,
      poster_id,
    });

    // Respond with the created tutors
    res.status(200).json(tutorData);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});




// // PUT/Update one tutors
router.put('/:id', withAuth, async (req, res) => {
  try {
    // Find the tutors by its ID
    const tutorData = await tutors.findByPk(req.params.id);

    // Check if the tag exists
    if (!tutorData) {
      res.status(404).json({ message: 'No tutors found with this id' });
      return;
    }

    // Update tutors data
    const updatedtutors = await tutorData.update(req.body);

    res.status(200).json(updatedtutors);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// ** COMING SOON **
// // DEL/Delete one tutors
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const tutorData = await tutors.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tutorData) {
      res.status(404).json({ message: 'No tutor with this id' });
      return;
    }
    res.status(200).json({ message: 'Category and associated Tutors have been deleted' });
  } catch (err) {
    console.log("tres");
    res.status(500).json(err);
  }
});

module.exports = router;
