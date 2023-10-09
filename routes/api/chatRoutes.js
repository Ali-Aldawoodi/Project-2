const key = process.env.API_KEY

// Import required modules and initialize OpenAI (if you're using it)
const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');

// Create an instance of OpenAI using your API key (if you're using it)
const openai = new OpenAI({ apiKey: process.env.API_KEY });

// Define the route to handle POST requests to '/chat/ask'
router.post('/', async (req, res) => {
  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "text-ada-001",
        prompt: "what's you name?",
        max_tokens: 7
      })
    });

    const data = await response.json();
    console.log(data.choices[0]);

  } catch (error) {
    console.error('Error:', error);
  }
});
    
module.exports = router;
