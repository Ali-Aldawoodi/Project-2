const apiEndpoint = '/api/chat'; // This should match your server route

async function sendQuery() {
  const userInput = document.getElementById('userInput').value;

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        Authorization: process.env.API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "text-davinci-002",
        prompt: "hello",
        max_tokens: 7
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log("--------------------");
    console.log(data);
    console.log("--------------------");

    // Display the response
    document.getElementById('response').textContent = answer;
  } catch (error) {
    console.error('Error:', error);
  }
}
