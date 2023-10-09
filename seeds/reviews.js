const { Reviews } = require('../models');


// ** NOTE ** Eventually we need to add the start value that the user will be able to input (1-5)
const ReviewsData = [
  {
    id: 1,
    users_id: 1,
    reviews_content: "testuser1 was the most helpful ever!",
    poster_id: 9,
  },
  {
    id: 2,
    users_id: 1,
    reviews_content: "testuser1 was literally the worst tutor datty ever!",
    poster_id: 7,
  },
  {
    id: 3,
    users_id: 2,
    reviews_content: "testuser2 was the most helpful ever!",
    poster_id: 10,
  },
  {
    id: 4,
    users_id: 2,
    reviews_content: "testuser2 was literally the worst tutor datty ever!",
    poster_id: 24,
  },
  {
    id: 5,
    users_id: 3,
    reviews_content: "testuser was the most helpful ever!",
    poster_id: 17,
  },
  {
    id: 6,
    users_id: 3,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 22,
  },
  {
    id: 7,
    users_id: 5,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 21,
  },
  {
    id: 8,
    users_id: 6,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 13,
  },
  {
    id: 9,
    users_id: 2,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 12,
  },
  {
    id: 10,
    users_id: 1,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 11,
  },
  {
    id: 11,
    users_id: 4,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 7,
  },
  {
    id: 12,
    users_id: 4,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 19,
  },
  {
    id: 1,
    users_id: 6,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 18,
  },
  {
    id: 14,
    users_id: 3,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 15,
  },
  {
    id: 15,
    users_id: 1,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 14,
  },
  {
    id: 16,
    users_id: 1,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 24,
  },
  {
    id: 17,
    users_id: 1,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 21,
  },
  {
    id: 18,
    users_id: 2,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 13,
  },
  {
    id: 19,
    users_id: 5,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 10,
  },
  {
    id: 20,
    users_id: 2,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 17,
  },
  {
    id: 21,
    users_id: 6,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 9,
  },
  {
    id: 22,
    users_id: 3,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 21,
  },
  {
    id: 2,
    users_id: 4,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 20,
  },
  {
    id: 24,
    users_id: 1,
    reviews_content: "testuser was literally the worst tutor datty ever!",
    poster_id: 20,
  },
];

const seedreviews = () => Reviews.bulkCreate(ReviewsData);

module.exports = seedreviews;
