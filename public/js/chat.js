document.addEventListener('DOMContentLoaded', () => {
  const userQueryInput = document.querySelector('#user-query');
  const chatGPTAnswer = document.querySelector('#chatGPT-answer');

  document.querySelector('#chat-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const userQuery = userQueryInput.value;

    // Send a POST request to your server-side OpenAI proxy endpoint
    const response = await fetch("/chat/openai-proxy", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userQuery: userQuery, // Send the user's query to the server
      }),
    });

    if (response.ok) {
      const responseData = await response.json();
      // Use a <p> element to display the response
      chatGPTAnswer.innerHTML = `<p>${responseData.choices[0].text}</p>`;
      console.log(responseData.choices[0].text);


    } else {
      console.error('Error:', response.status);
      chatGPTAnswer.textContent = 'Error fetching data from the server';
    }
  });
});
