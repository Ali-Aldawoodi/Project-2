const { Users } = require('../models');

const usersData = [
  {
    users_name: 'rock music',
  },
  {
    users_name: 'pop music',
  },
  {
    users_name: 'blue',
  },
  {
    users_name: 'red',
  },
  {
    users_name: 'green',
  },
  {
    users_name: 'white',
  },
  {
    users_name: 'gold',
  },
  {
    users_name: 'pop culture',
  },
];

const seeduserss = () => Users.bulkCreate(usersData);

module.exports = seeduserss;
