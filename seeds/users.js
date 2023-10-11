const { Users } = require('../models');

const usersData = [
  {
    users_name: 'Dru Sanchez',
    users_password: 'password123'
  },
  {
    users_name: 'Trinh Nguyen',
    users_password: 'password123'
  },
  {
    users_name: 'Saad Khan',
    users_password: 'password123'
  },
  {
    users_name: 'Thomas Gilmore',
    users_password: 'password123'
  },
  {
    users_name: 'Alexis Gonzalez',
    users_password: 'password123'
  },
  {
    users_name: 'Rebecca Burke',
    users_password: 'password123'
  },
  {
    users_name: 'Ali Aldawoodi',
    users_password: 'password123'
  },
  {
    users_name: 'Broch Baltzer',
    users_password: 'password123'
  },
  {
    users_name: 'Ricardo Behrens',
    users_password: 'password123'
  },
  {
    users_name: 'Luke Phillips',
    users_password: 'password123'
  },
  {
    users_name: 'Richard Au',
    users_password: 'password123'
  },
  {
    users_name: 'Alexa Lester',
    users_password: 'password123'
  },
  {
    users_name: 'Anthony Ciccone',
    users_password: 'password123'
  },
  {
    users_name: 'Brandan Flores',
    users_password: 'password123'
  },
  {
    users_name: 'Brittney Cehura',
    users_password: 'password123'
  },
  {
    users_name: 'Cody Coffee',
    users_password: 'password123'
  },
  {
    users_name: 'Colton Laidig',
    users_password: 'password123'
  },
  {
    users_name: 'Jacob Campa',
    users_password: 'password123'
  },
  {
    users_name: 'Jessie Shockey',
    users_password: 'password123'
  },
  {
    users_name: 'John Rollins',
    users_password: 'password123'
  },
  {
    users_name: 'Kalani Jones',
    users_password: 'password123'
  },
  {
    users_name: 'Lisa Eimicke',
    users_password: 'password123'
  },
  {
    users_name: 'Michael Hannah',
    users_password: 'password123'
  },
];

const seedusers = () => Users.bulkCreate(usersData);

module.exports = seedusers;
