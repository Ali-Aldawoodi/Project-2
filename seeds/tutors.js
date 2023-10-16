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
    },
    {
        tutors_name: "Juan Delgado",
        tutors_email: "t1@a.com",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "test2",
        tutors_email: "t2@a.com",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "test3",
        tutors_email: "t3@a.com",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "test4",
        tutors_email: "t4@a.com",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "test5",
        tutors_email: "t5@a.com",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "test6",
        tutors_email: "t6@a.com",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "test7",
        tutors_email: "t7@a.com",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "test8",
        tutors_email: "t8@a.com",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "test9",
        tutors_email: "t9@a.com",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "test10",
        tutors_email: "t10@a.com",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "test11",
        tutors_email: "t11@a.com",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "test12",
        tutors_email: "t12@a.com",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "test13",
        tutors_email: "t13@a.com",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "test14",
        tutors_email: "t14@a.com",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
];

const seedtutors = () => Tutors.bulkCreate(tutorsData);

module.exports = seedtutors;