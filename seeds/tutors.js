const { Tutors } = require('../models');

const tutorsData = [
    {
        tutors_name: "Reza Abasaltian",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Mazin Abed",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Alex Aghabegian",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Deborah Aina",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Corrado Alfano",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Sandhyna Aluru",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Maria Verna Aquino",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Armenuhi Avanesyan",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Kourt Bailey",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Chris Baird",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Saurabh Bajaj",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Sheetal Bangalore Srikumar",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Austin Barrett",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Charles (Tucker) Barrett",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Anda Ben",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Hunter Best",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Nikhil Bhanderi",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Gunjan Bhargava",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "David Billings",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Aisha Braxton-Garvin",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Michell Brito",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "John Broaddus",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Sean Brown-Byfield",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Byron Brown",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Rebecca Burke",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Matthew Calimbas",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Jacob Carver",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Joem Casusi",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Aaron Centeno",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Manhar Chandiramani",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Michelle Chang",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "David Chao",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Meguel Chavez",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Josephine Cheatham",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Samson Chishiri",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Kameron Chumley-Soltani",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Jude Clark",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Wesley Clements",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "John Coakley",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Sharon Colson",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "James Compagnoni",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Samuel Cordova",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Aarti Couture",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Johnathan Czerniawski",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Bertram Darko",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Vincent Dawson",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Berlys Deardorff",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Juan Delgado",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Xiaohu Deng",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Neil Dhand",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Edward Doris",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Anathi Dubula",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Roger Dunkelbarger",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Ronald Ellis",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "David Elutilo",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Scott Everett",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Imaad Fakier",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Ashton Foston",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Andre Froneman",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Orlando Fuller",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Mark Fulton",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Weng Fei Fung",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Abduraghmaan Gabriels",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Donnahue George",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Carla Gerardu-Low",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Thomas Gilmore",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Anna Gondring",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Alexis Gonzalez",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Kyle Goode",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Martin Guldberg",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Ndumiso Zimele Gumede",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Sibusiso Gumede",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Zethembiso Gwala",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Abiel Hailemariam",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Alexander Hacker",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "David Han",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Andrew Hardemon",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Lindsey Haselden",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Stephanie Hiewobea-Nyarko",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Eric Hilderbrand",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Abdullah Al Hilfi",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Erik Hirsch",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Mila Hose",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Limei Hou",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Erik Hoversten",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Dennis Itua",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Ibrahim Jaberkhel",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Rahul Jayakumar",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Wongani Jere",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Sachin Jhaveri",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Jili Jiang",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Andres Jimenez",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Aura Johnson",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "David Johnson",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Aubrey Jones",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Jeremy Jones",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Jehyun Jung",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Cody Junier",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Sangeetha Kaliaperumal",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Yanga Kandeni",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Kelli Kennedy",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Saad Khan",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Kathleen Kirby",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Jacob Kountz",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Jennifer Kruk",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Irina Kudosova",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Suresh Kumar",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Sandhya Kumari",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Kellie Kumasaka",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Robert Kurle Jr.",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Patrick Lake",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Raymond Lee",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Rebecca Leeds",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Brandon Leek",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Chris Lewis",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Bethany Lindberg",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Andres Long",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Benicio Lopez",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Jose Lopez",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Savien Love",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Phil Loy",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Daphne Lun",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Jean-Michel Makaba",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Shekhar Maharaj",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Tshepiso Brian Maleka",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Ntwampe Mampuru",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Iftekher Mamun",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Natasha Mann",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Khangwelo Maphanda",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Chase Markland",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Ben Martin",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Tsepang Maseti",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Gift Mashalane",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Masibonge Masinga",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Andrew Mason",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Tori Matthews",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Jim Steven Matts",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Janvier Mbilizi",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Scott McAnally",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Matthew McNew",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Patrick Meehan",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Dominique Meeks Gombe",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Hassan Mehmood",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Ntandoyenkosi Mendu",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Megan Meyers",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Njabulo Augustine Mhlambi",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "James Miller",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Mogamat Muneer Miller",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Muhammad Mirza",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Justin Moore",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Ntombifuthi Margret Motaung",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Andreas Motsie",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Aadil Ejaz Muhammad",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "John Murphy",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Alfonce Mutuku",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Lindelwe Myeza",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Faran Navazi",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Michelle Yolanda Ndlovu",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Matthew Nechy",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Sean New",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Zamokuhle Ngubane",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Juno Nguyen",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Trinh Nguyen",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Kwethemba Luxolo Nkabinde",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Jacob Nordan",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Thabo Charles Ntsekhe",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Firas Obeid",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Josshy Olea",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Armando Osorio",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Jaytee Padilla",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Sam Pai",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "David Park",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Anthony Parrino",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Robert Parsons",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Joannes Gerardus Bartholomeus Pasch",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Mansi Patel",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "David Pecot",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Boingotlo Peege",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Sara Neves Pereira",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Geronimo Perez",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Martin Perina",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Allex Philidor",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Dominika Pietrzak",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Valerie Pillay",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Colin Porter",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Richa Prakash",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Igor Prilepskyi",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Charles Puente-Matos",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Erich Purpur",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Nataliia Pyltiai",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Sathya Raja",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Eurel Rambaran",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Katlego Rathelele",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Ariel Razon",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Vijaya Reddy",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Katharine Redford",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Simon Rennocks",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Michael Rimmer",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Michael Rogers",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Brandon Rose",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Alistair Rowden",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Roberto Salazar",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Alexis San Javier",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Dru Sanchez",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Luis Sanchez",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Ramon Sanchez",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Juan Santiago",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Eric Sayer",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Kaia Scheirman",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Matthew Seiler",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Lindani Shaun Shabangu",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Nirav Shah",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Carlin Shaw",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Hamza Shoukat",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Dane Shrewsbury",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Naz Shuva",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Kristin Singhasemanon",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Daniel Sires",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Sandra Smith",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Stephanie Smith",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Stuart Smith",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Phillip Snell",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Nicole Soltau",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Donald Stephens",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Lalith Sugavanam",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Yi Xin Tan",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Lavina Tang",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Bobbi Tarkany",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Blaise-Alexander Telemaque",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Pa Yeng Thao",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Steven Thomas",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Rekik Tilahun",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Andrew Tirpok",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "John Titus",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Tudor Tocan",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Juan Torres",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Johana Tovar",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Rafi Trad",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Tracey Tran",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Rene Trevino",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Nelson Tsai",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Lebuso Tsilo",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Julio Valdez",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Oswald Vinueza",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Anastasia Warren",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Matthew Werth",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Lynette Williams",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Alysia Won",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Jesse Wright",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Charles Xia",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Marko Yang",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Corey Yates",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Joseph Young",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    },
    {
        tutors_name: "Yuyang Zhong",
        tutors_email: "",
        tutors_ratings: 0,
        tutors_password: "password123"
    }
];

const seedtutors = () => Tutors.bulkCreate(tutorsData);

module.exports = seedtutors;