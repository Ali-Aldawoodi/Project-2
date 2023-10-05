const { Reviews } = require('../models');


// ** NOTE ** Eventually we need to add the start value that the user will be able to input (1-5)
const ReviewsData = [
  {
    id: 1,
    users_id: 1,
    reviews_content: "testuser1 was the most helpful ever!",
  },
  {
    id: 2,
    users_id: 1,
    reviews_content: "testuser1 was literally the worst tutor datty ever!",
  },
  {
    id: 3,
    users_id: 2,
    reviews_content: "testuser2 was the most helpful ever!",
  },
  {
    id: 4,
    users_id: 2,
    reviews_content: "testuser2 was literally the worst tutor datty ever!",
  },
  {
    id: 5,
    users_id: 3,
    reviews_content: "testuser3 was the most helpful ever!",
  },
  {
    id: 6,
    users_id: 3,
    reviews_content: "testuser3 was literally the worst tutor datty ever!",
  }
];

const seedreviews = () => Reviews.bulkCreate(ReviewsData);

module.exports = seedreviews;
