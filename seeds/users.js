const { Users } = require('../models');

const usersData = [
  {
    id: 1,
    users_name: 'testuser1',
    users_password: 'password123'
  },
  {
    id: 2,
    users_name: 'testuser2',
    users_password: 'password123'
  },
  {
    id: 3,
    users_name: 'testuser3',
    users_password: 'password123'
  },
];

const seeduserss = () => Users.bulkCreate(usersData);

module.exports = seeduserss;
