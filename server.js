const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.API_KEY });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

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