const { Reviews } = require('../models');


// ** NOTE ** Eventually we need to add the start value that the user will be able to input (1-5)
const reviewsData = [
  {
    tutors_id: 1,
    tutors_rating: 5,
    reviews_content: "testuser1 was the most helpful ever!",
    poster_id: 1,
  },
  {
    tutors_id: 2,
    tutors_rating: 1,
    reviews_content: "testuser1 was literally the worst tutor datty ever!",
    poster_id: 2,
  },
  {
    tutors_id: 3,
    tutors_rating: 5,
    reviews_content: "great!",
    poster_id: 3,
  },
  {
    tutors_id: 1,
    tutors_rating: 3,
    reviews_content: "this is a test to add ratings",
    poster_id: 1,
  },
  {
    tutors_id: 2,
    tutors_rating: 4,
    reviews_content: "this is a test to add ratings for another tutor",
    poster_id: 1,
  },
  {
    tutors_id: 3,
    tutors_rating: 3,
    reviews_content: "more rating for testing!",
    poster_id: 2,
  },
  {
    tutors_id: 1,
    tutors_rating: 4,
    reviews_content: "test1",
    poster_id: 1,
  },
  {
    tutors_id: 2,
    tutors_rating: 5,
    reviews_content: "tes2",
    poster_id: 2,
  },
  {
    tutors_id: 3,
    tutors_rating: 5,
    reviews_content: "test3",
    poster_id: 3,
  },
  {
    tutors_id: 1,
    tutors_rating: 5,
    reviews_content: "test4",
    poster_id: 1,
  },
  {
    tutors_id: 2,
    tutors_rating: 5,
    reviews_content: "test5",
    poster_id: 1,
  },
  {
    tutors_id: 3,
    tutors_rating: 5,
    reviews_content: "test6",
    poster_id: 2,
  },
  {
    tutors_id: 153,
    tutors_rating: 5,
    reviews_content: "My tutor was amazing!",
    poster_id: 2,
  },
];

const seedreviews = () => Reviews.bulkCreate(reviewsData);

module.exports = seedreviews;
