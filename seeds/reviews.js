const { Reviews } = require('../models');


// ** NOTE ** Eventually we need to add the start value that the user will be able to input (1-5)
const ReviewsData = [
  {
    id: 1,
    users_id: 1,
    reviews_content: "testuser1 was the most helpful ever!",
    poster_id: 2,
  },
  {
    id: 2,
    users_id: 1,
    reviews_content: "testuser1 was literally the worst tutor datty ever!",
    poster_id: 3,
  },
  {
    id: 3,
    users_id: 2,
    reviews_content: "testuser2 was the most helpful ever!",
    poster_id: 1,
  },
  {
    id: 4,
    users_id: 2,
    reviews_content: "testuser2 was literally the worst tutor datty ever!",
    poster_id: 3,
  },
  {
    id: 5,
    users_id: 3,
    reviews_content: "testuser3 was the most helpful ever!",
    poster_id: 1,
  },
  {
    id: 6,
    users_id: 3,
    reviews_content: "testuser3 was literally the worst tutor datty ever!",
    poster_id: 1,
  }
];

const seedreviews = () => Reviews.bulkCreate(ReviewsData);

module.exports = seedreviews;
