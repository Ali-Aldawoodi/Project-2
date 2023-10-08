const apiEndpoint = '/api/chat'; // This should match your server route

async function sendQuery() {
  const userInput = document.getElementById('userInput').value;

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'text-davinci-002',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant.'
          },
          {
            role: 'user',
            content: userInput, // Use the user's input here
          }
        ],
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const answer = data.answer;

    // Display the response
    document.getElementById('response').textContent = answer;
  } catch (error) {
    console.error('Error:', error);
  }
}
