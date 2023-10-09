const { Users } = require('../models');

const usersData = [
  {
    id: 1,
    users_name: 'Dru Sanchez',
    users_password: 'password123'
  },
  {
    id: 2,
    users_name: 'Trinh Nguyen',
    users_password: 'password123'
  },
  {
    id: 3,
    users_name: 'Saad Khan',
    users_password: 'password123'
  },
  {
    id: 4,
    users_name: 'Thomas Gilmore',
    users_password: 'password123'
  },
  {
    id: 5,
    users_name: 'Alexis Gonzalez',
    users_password: 'password123'
  },
  {
    id: 6,
    users_name: 'Rebecca Burke',
    users_password: 'password123'
  },
  {
    id: 7,
    users_name: 'Ali Aldawoodi',
    users_password: 'password123'
  },
  {
    id: 8,
    users_name: 'Broch Baltzer',
    users_password: 'password123'
  },
  {
    id: 9,
    users_name: 'Ricardo Behrens',
    users_password: 'password123'
  },
  {
    id: 10,
    users_name: 'Luke Phillips',
    users_password: 'password123'
  },
  {
    id: 11,
    users_name: 'Richard Au',
    users_password: 'password123'
  },
  {
    id: 12,
    users_name: 'Alexa Lester',
    users_password: 'password123'
  },
  {
    id: 13,
    users_name: 'Anthony Ciccone',
    users_password: 'password123'
  },
  {
    id: 14,
    users_name: 'Brandan Flores',
    users_password: 'password123'
  },
  {
    id: 15,
    users_name: 'Brittney Cehura',
    users_password: 'password123'
  },
  {
    id: 16,
    users_name: 'Cody Coffee',
    users_password: 'password123'
  },
  {
    id: 17,
    users_name: 'Colton Laidig',
    users_password: 'password123'
  },
  {
    id: 18,
    users_name: 'Jacob Campa',
    users_password: 'password123'
  },
  {
    id: 19,
    users_name: 'Jessie Shockey',
    users_password: 'password123'
  },
  {
    id: 20,
    users_name: 'John Rollins',
    users_password: 'password123'
  },
  {
    id: 21,
    users_name: 'Kalani Jones',
    users_password: 'password123'
  },
  {
    id: 23,
    users_name: 'Lisa Eimicke',
    users_password: 'password123'
  },
  {
    id: 24,
    users_name: 'Michael Hannah',
    users_password: 'password123'
  },
];

const seedusers = () => Users.bulkCreate(usersData);

module.exports = seedusers;
