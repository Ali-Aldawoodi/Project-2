const { Users } = require('../models');

const usersData = [
  {
    users_name: 'Ricardo Behrens',
    users_password: 'password123',
    users_email: 'behrensricardo@gmail.com',
  },
  {
    users_name: 'Broch Baltzer',
    users_password: 'password123',
    users_email: 'trinh@m.com',
  },
  {
    users_name: 'Ali Aldawoodi',
    users_password: 'password123',
    users_email: 'ali@a.com',
  },
  {
    users_name: 'Richard Au',
    users_password: 'password123',
    users_email: 'richard@a.com',
  },
  {
    users_name: 'Luke Phillips',
    users_password: 'password123',
    users_email: 'luken@p.com',
  },
];

const seedusers = () => Users.bulkCreate(usersData, {individualHooks: true, returning: true});

module.exports = seedusers;
