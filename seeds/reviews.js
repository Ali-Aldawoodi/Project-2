const { Reviews } = require('../models');


// ** NOTE ** Eventually we need to add the start value that the user will be able to input (1-5)
const reviewsData = [
  {
    id: 1,
    users_id: 1,
    reviews_content: "testuser1 was the most helpful ever!",
    poster_id: 1,
  },
  {
    id: 2,
    users_id: 2,
    reviews_content: "testuser1 was literally the worst tutor datty ever!",
    poster_id: 2,
  }
];

const seedreviews = () => Reviews.bulkCreate(reviewsData);

module.exports = seedreviews;
