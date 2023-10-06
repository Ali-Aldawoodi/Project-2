// Define your server's endpoint URL
const apiUrl = '/ask'; // Change this to your server's actual endpoint URL

// Function to send a question to your server
async function askQuestion(question) {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST', // You can use POST or GET based on your server's setup
      body: JSON.stringify({ question }), // Send the question as JSON
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const answer = data.answer; // Extract the answer from the response
    // Display the answer to the user
    console.log('Answer:', answer);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Example usage
askQuestion('Translate "hello" to French');



// Different code
const axios = require('axios');

// Define your OpenAI API key
const apiKey = 'YOUR_OPENAI_API_KEY';

// Define the content you want to generate using GPT-3.5 Turbo
const prompt = 'Translate the following English text to French: "Hello, how are you?"';

// Make an HTTP POST request to the OpenAI API
axios.post('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions', {
  prompt,
  max_tokens: 50, // Adjust the maximum number of tokens in the response
}, {
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
})
.then(response => {
  const generatedText = response.data.choices[0].text;
  console.log('Generated Text:', generatedText);
})
.catch(error => {
  console.error('Error:', error);
});
