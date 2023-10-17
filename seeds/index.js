const seedTutors = require('./tutors.js')
const seedUsers = require('./users.js');
const seedReviews = require('./reviews.js');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\r\n----- DATABASE SYNCED -----\r\n');

  await seedTutors();
  console.log('\r\n----- TUTORS SEEDED -----\r\n')

  await seedUsers();
  console.log('\r\n----- USERS SEEDED -----\r\n');

  await seedReviews();
  console.log('\r\n----- REVIEWS SEEDED -----\r\n');

  process.exit(0);
};

seedAll();
