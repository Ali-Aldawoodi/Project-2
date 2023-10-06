const apiEndpoint = '/chat/ask'; // This should match your server route

async function sendQuery() {
  const userInput = document.getElementById('userInput').value;

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: userInput,
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
