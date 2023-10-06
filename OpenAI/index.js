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
