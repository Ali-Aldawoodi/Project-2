const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const helpers = require('./utils/helpers');
require('dotenv').config();

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = process.env.PORT || 3001;
const app = express();

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.API_KEY });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  // console.log('-----------------------------------------------------------------------')
  // console.log('See the category-routes in action at...');
  // console.log(`http://localhost:${PORT}/api/categories`)
  // console.log('-----------------------------------------------------------------------')
  // console.log('')
  // console.log('-----------------------------------------------------------------------')
  // console.log('See the product-routes in action at...');
  // console.log(`http://localhost:${PORT}/api/products`)
  // console.log('-----------------------------------------------------------------------')
  // console.log('')
  // console.log('-----------------------------------------------------------------------')
  // console.log('See the tag-routes in action at...');
  // console.log(`http://localhost:${PORT}/api/tags`)
  // console.log('-----------------------------------------------------------------------')
  console.log('luke was here')
});

// Dan is the best