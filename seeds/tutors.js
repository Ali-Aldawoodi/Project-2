const { Tutors } = require('../models');

const tutorsData = [
    {
        tutors_name: "Reza Abasaltian",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Mazin Abed",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Alex Aghabegian",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Deborah Aina",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Corrado Alfano",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Sandhyna Aluru",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Maria Verna Aquino",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Armenuhi Avanesyan",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Kourt Bailey",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Chris Baird",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Saurabh Bajaj",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Sheetal Bangalore Srikumar",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Austin Barrett",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Charles (Tucker) Barrett",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Anda Ben",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Hunter Best",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Nikhil Bhanderi",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Gunjan Bhargava",
        tutors_avgRating: 0
   },
    {
        tutors_name: "David Billings",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Aisha Braxton-Garvin",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Michell Brito",
        tutors_avgRating: 0
   },
    {
        tutors_name: "John Broaddus",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Sean Brown-Byfield",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Byron Brown",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Rebecca Burke",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Matthew Calimbas",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Jacob Carver",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Joem Casusi",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Aaron Centeno",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Manhar Chandiramani",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Michelle Chang",
        tutors_avgRating: 0
   },
    {
        tutors_name: "David Chao",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Meguel Chavez",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Josephine Cheatham",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Samson Chishiri",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Kameron Chumley-Soltani",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Jude Clark",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Wesley Clements",
        tutors_avgRating: 0
   },
    {
        tutors_name: "John Coakley",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Sharon Colson",
        tutors_avgRating: 0
   },
    {
        tutors_name: "James Compagnoni",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Samuel Cordova",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Aarti Couture",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Johnathan Czerniawski",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Bertram Darko",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Vincent Dawson",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Berlys Deardorff",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Juan Delgado",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Xiaohu Deng",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Neil Dhand",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Edward Doris",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Anathi Dubula",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Roger Dunkelbarger",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Ronald Ellis",
        tutors_avgRating: 0
   },
    {
        tutors_name: "David Elutilo",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Scott Everett",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Imaad Fakier",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Ashton Foston",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Andre Froneman",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Orlando Fuller",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Mark Fulton",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Weng Fei Fung",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Abduraghmaan Gabriels",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Donnahue George",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Carla Gerardu-Low",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Thomas Gilmore",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Anna Gondring",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Alexis Gonzalez",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Kyle Goode",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Martin Guldberg",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Ndumiso Zimele Gumede",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Sibusiso Gumede",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Zethembiso Gwala",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Abiel Hailemariam",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Alexander Hacker",
        tutors_avgRating: 0
   },
    {
        tutors_name: "David Han",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Andrew Hardemon",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Lindsey Haselden",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Stephanie Hiewobea-Nyarko",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Eric Hilderbrand",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Abdullah Al Hilfi",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Erik Hirsch",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Mila Hose",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Limei Hou",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Erik Hoversten",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Dennis Itua",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Ibrahim Jaberkhel",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Rahul Jayakumar",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Wongani Jere",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Sachin Jhaveri",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Jili Jiang",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Andres Jimenez",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Aura Johnson",
        tutors_avgRating: 0
   },
    {
        tutors_name: "David Johnson",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Aubrey Jones",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Jeremy Jones",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Jehyun Jung",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Cody Junier",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Sangeetha Kaliaperumal",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Yanga Kandeni",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Kelli Kennedy",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Saad Khan",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Kathleen Kirby",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Jacob Kountz",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Jennifer Kruk",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Irina Kudosova",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Suresh Kumar",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Sandhya Kumari",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Kellie Kumasaka",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Robert Kurle Jr.",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Patrick Lake",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Raymond Lee",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Rebecca Leeds",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Brandon Leek",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Chris Lewis",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Bethany Lindberg",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Andres Long",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Benicio Lopez",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Jose Lopez",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Savien Love",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Phil Loy",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Daphne Lun",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Jean-Michel Makaba",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Shekhar Maharaj",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Tshepiso Brian Maleka",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Ntwampe Mampuru",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Iftekher Mamun",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Natasha Mann",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Khangwelo Maphanda",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Chase Markland",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Ben Martin",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Tsepang Maseti",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Gift Mashalane",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Masibonge Masinga",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Andrew Mason",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Tori Matthews",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Jim Steven Matts",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Janvier Mbilizi",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Scott McAnally",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Matthew McNew",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Patrick Meehan",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Dominique Meeks Gombe",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Hassan Mehmood",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Ntandoyenkosi Mendu",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Megan Meyers",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Njabulo Augustine Mhlambi",
        tutors_avgRating: 0
   },
    {
        tutors_name: "James Miller",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Mogamat Muneer Miller",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Muhammad Mirza",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Justin Moore",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Ntombifuthi Margret Motaung",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Andreas Motsie",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Aadil Ejaz Muhammad",
        tutors_avgRating: 0
   },
    {
        tutors_name: "John Murphy",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Alfonce Mutuku",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Lindelwe Myeza",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Faran Navazi",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Michelle Yolanda Ndlovu",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Matthew Nechy",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Sean New",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Zamokuhle Ngubane",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Juno Nguyen",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Trinh Nguyen",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Kwethemba Luxolo Nkabinde",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Jacob Nordan",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Thabo Charles Ntsekhe",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Firas Obeid",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Josshy Olea",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Armando Osorio",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Jaytee Padilla",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Sam Pai",
        tutors_avgRating: 0
   },
    {
        tutors_name: "David Park",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Anthony Parrino",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Robert Parsons",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Joannes Gerardus Bartholomeus Pasch",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Mansi Patel",
        tutors_avgRating: 0
   },
    {
        tutors_name: "David Pecot",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Boingotlo Peege",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Sara Neves Pereira",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Geronimo Perez",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Martin Perina",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Allex Philidor",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Dominika Pietrzak",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Valerie Pillay",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Colin Porter",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Richa Prakash",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Igor Prilepskyi",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Charles Puente-Matos",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Erich Purpur",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Nataliia Pyltiai",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Sathya Raja",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Eurel Rambaran",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Katlego Rathelele",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Ariel Razon",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Vijaya Reddy",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Katharine Redford",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Simon Rennocks",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Michael Rimmer",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Michael Rogers",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Brandon Rose",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Alistair Rowden",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Roberto Salazar",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Alexis San Javier",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Dru Sanchez",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Luis Sanchez",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Ramon Sanchez",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Juan Santiago",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Eric Sayer",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Kaia Scheirman",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Matthew Seiler",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Lindani Shaun Shabangu",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Nirav Shah",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Carlin Shaw",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Hamza Shoukat",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Dane Shrewsbury",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Naz Shuva",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Kristin Singhasemanon",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Daniel Sires",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Sandra Smith",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Stephanie Smith",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Stuart Smith",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Phillip Snell",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Nicole Soltau",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Donald Stephens",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Lalith Sugavanam",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Yi Xin Tan",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Lavina Tang",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Bobbi Tarkany",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Blaise-Alexander Telemaque",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Pa Yeng Thao",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Steven Thomas",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Rekik Tilahun",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Andrew Tirpok",
        tutors_avgRating: 0
   },
    {
        tutors_name: "John Titus",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Tudor Tocan",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Juan Torres",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Johana Tovar",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Rafi Trad",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Tracey Tran",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Rene Trevino",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Nelson Tsai",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Lebuso Tsilo",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Julio Valdez",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Oswald Vinueza",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Anastasia Warren",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Matthew Werth",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Lynette Williams",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Alysia Won",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Jesse Wright",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Charles Xia",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Marko Yang",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Corey Yates",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Joseph Young",
        tutors_avgRating: 0
   },
    {
        tutors_name: "Yuyang Zhong",
        tutors_avgRating: 0
   }
];

const seedtutors = () => Tutors.bulkCreate(tutorsData);

module.exports = seedtutors;

// const tutorsData = [


// {
    //     tutors_name: "Reza Abasaltian",
    //     tutors_email: "R@a.com",
    //     tutors_avgRating: 0,
    //     tutors_password: "password123"
    // },
    // {
    //     tutors_name: "Mazin Abed",
    //     tutors_email: "m@a.com",
    //     tutors_avgRating: 0,
    //     tutors_password: "password123"
    // },
    // {
    //     tutors_name: "Juan Delgado",
    //     tutors_email: "t1@a.com",
    //     tutors_avgRating: 0,
    //     tutors_password: "password123"
    // },
    // {
    //     tutors_name: "test2",
    //     tutors_email: "t2@a.com",
    //     tutors_avgRating: 0,
    //     tutors_password: "password123"
    // },
    // {
    //     tutors_name: "test3",
    //     tutors_email: "t3@a.com",
    //     tutors_avgRating: 0,
    //     tutors_password: "password123"
    // },
    // {
    //     tutors_name: "test4",
    //     tutors_email: "t4@a.com",
    //     tutors_avgRating: 0,
    //     tutors_password: "password123"
    // },
    // {
    //     tutors_name: "test5",
    //     tutors_email: "t5@a.com",
    //     tutors_avgRating: 0,
    //     tutors_password: "password123"
    // },
    // {
    //     tutors_name: "test6",
    //     tutors_email: "t6@a.com",
    //     tutors_avgRating: 0,
    //     tutors_password: "password123"
    // },
    // {
    //     tutors_name: "test7",
    //     tutors_email: "t7@a.com",
    //     tutors_avgRating: 0,
    //     tutors_password: "password123"
    // },
    // {
    //     tutors_name: "test8",
    //     tutors_email: "t8@a.com",
    //     tutors_avgRating: 0,
    //     tutors_password: "password123"
    // },
    // {
    //     tutors_name: "test9",
    //     tutors_email: "t9@a.com",
    //     tutors_avgRating: 0,
    //     tutors_password: "password123"
    // },
    // {
    //     tutors_name: "test10",
    //     tutors_email: "t10@a.com",
    //     tutors_avgRating: 0,
    //     tutors_password: "password123"
    // },
    // {
    //     tutors_name: "test11",
    //     tutors_email: "t11@a.com",
    //     tutors_avgRating: 0,
    //     tutors_password: "password123"
    // },
    // {
    //     tutors_name: "test12",
    //     tutors_email: "t12@a.com",
    //     tutors_avgRating: 0,
    //     tutors_password: "password123"
    //     },
    // {
    //     tutors_name: "test13",
    //     tutors_email: "t13@a.com",
    //     tutors_avgRating: 0,
    //     tutors_password: "password123"
    // },
    // {
    //     tutors_name: "test14",
    //     tutors_email: "t14@a.com",
    //     tutors_avgRating: 0,
    //     tutors_password: "password123"
    // },