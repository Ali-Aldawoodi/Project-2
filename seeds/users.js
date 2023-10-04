const { Users } = require('../models');

const usersData = [
  {
    users_name: 'testuser1',
    users_password: 'password123'
  },
  {
    users_name: 'testuser2',
    users_password: 'password123'
  },
  {
    users_name: 'testuser3',
    users_password: 'password123'
  },
];

const seeduserss = () => Users.bulkCreate(usersData);

module.exports = seeduserss;
