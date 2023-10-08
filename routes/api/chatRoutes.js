// Import required modules and initialize OpenAI (if you're using it)
const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');

// Create an instance of OpenAI using your API key (if you're using it)
const openai = new OpenAI({ apiKey: process.env.API_KEY });

// Define the route to handle POST requests to '/chat/ask'
router.post('/', async (req, res) => {
  const { question } = req.body;

  try {
    // Use OpenAI to generate a response here if you're using it
    const messages = [
      {
        role: 'system',
        content: 'You are a helpful assistant.'
      },
      {
        role: 'user',
        content: 'What is the answer to life, the universe, and everything?'
      }
    ];
    
    const response = await openai.chat.completions.create({ messages });

    res.json({ answer });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
