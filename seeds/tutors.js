const { Tutors } = require('../models');

const tutorsData = [
    {
        tutors_name: "Reza Abasaltian",
        tutors_email: "R@a.com",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Mazin Abed",
        tutors_email: "m@a.com",
        tutors_ratings: 0,
        tutors_password: "password123"
    }
];

const seedtutors = () => Tutors.bulkCreate(tutorsData);

module.exports = seedtutors;