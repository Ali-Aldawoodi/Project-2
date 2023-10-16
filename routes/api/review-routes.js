const router = require('express').Router();
const { Reviews } = require('../../models');
const withAuth = require('../../utils/auth')

// The `/api/reviews` endpoint

// GET all reviews
router.get('/', async (req, res) => {
  try {
    const reviewData = await Reviews.findAll({});
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err)
  }
});

// GET one review
router.get('/:id', async (req, res) => {
  try {
    const reviewData = await Reviews.findByPk(req.params.id, {});
    if (!reviewData) {
      res.status(404).json({ message: 'No review found with this id' });
      return;
    }
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err)
  }
});

// Get all reviews for one specific tutor
router.get('/tutor/:tutorId', async (req, res) => {
  try {
    const tutorId = req.params.tutorId;

    const reviewData = await Reviews.findAll({
      where: { tutors_id: tutorId },
    });

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add a new route to get the total rating for a specific tutor
router.get('/tutor/:tutorId/total-rating', async (req, res) => {
  const tutorId = req.params.tutorId;
  try {
    // Fetch all reviews for the specified tutor
    const reviews = await Reviews.findAll({
      attributes: ['tutors_rating'],
      where: { tutors_id: tutorId },
    });

    // Calculate the total rating by summing up tutors_rating values
    const totalRating = reviews.reduce((total, review) => total + review.tutors_rating, 0);

    // Calculate the average rating
    const numberOfReviews = reviews.length;
    const averageRating = numberOfReviews > 0 ? totalRating / numberOfReviews : 0;

    console.log(numberOfReviews); // Number of Reviews for the tutor
    console.log(averageRating); // Average of all the reviews

    res.status(200).json({ totalRating });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST/Create new review
router.post('/', withAuth, async (req, res) => {
  try {
    const { tutors_id, reviews_content, poster_id } = req.body; // Destructure the data from the request body

    // Create the review using Reviews model and the provided data
    const reviewData = await Reviews.create({
      tutors_id,
      reviews_content,
      poster_id,
    });

    // Respond with the created review
    res.status(200).json(reviewData);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});


// PUT/Update one review
router.put('/:id', withAuth, async (req, res) => {
  try {
    // Find the review by its ID
    const reviewData = await Review.findByPk(req.params.id);

    // Check if the tag exists
    if (!reviewData) {
      res.status(404).json({ message: 'No review found with this id' });
      return;
    }

    // Update review data
    const updatedReview = await reviewData.update(req.body);

    res.status(200).json(updatedReview);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// DEL/Delete one Review
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const reviewData = await Review.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!reviewData) {
      res.status(404).json({ message: 'No Review with this id' });
      return;
    }
    res.status(200).json({ message: 'Category and associated reviews have been deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
