// PSEUDO CODDE

// User logs in
// User clicks on the ChatGPT button in the nav menu
// Page is directed to /chat where the user will find "username" and "What is your question?" in a placeholder
// User inputs the question and presses enter
// The user's query will go as a "prompt" to the fetch in /public/js/chat.js
// ChatGPT's answer comes back as the "responseData" in /public/js/chat.js
// This "responseData" needs to be posted in the chat.handlebars "chatGPT-answer"
// 
const key = process.env.API_KEY

// Import required modules and initialize OpenAI (if you're using it)
const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');

// Create an instance of OpenAI using your API key (if you're using it)
const openai = new OpenAI({ apiKey: process.env.API_KEY });

// Define the route to handle POST requests to '/chat'
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
        prompt: JSON.stringify({ query: userQuery }), // This is the input from the User at chat.handlebars
        max_tokens: 7
      })
    });

    if (response.ok) {
        const responseData = await response.json();
        // Display the response in the "chatGPT-answer" input field
        document.getElementById('chatGPT-answer').value = responseData.response;
    } else {
        // Handle the error
        console.error('Error:', response.statusText);
    }
} catch (error) {
    console.error('Error:', error);
}
});

module.exports = router;
