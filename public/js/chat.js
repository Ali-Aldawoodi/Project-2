// PSEUDO CODDE

// User logs in
// User clicks on the ChatGPT button in the nav menu
// Page is directed to /chat where the user will find "username" and "What is your question?" in a placeholder
// User inputs the question and presses enter
// The user's query will go as a "prompt" to the fetch in /public/js/chat.js
// ChatGPT's answer comes back as the "responseData" in /public/js/chat.js
// This "responseData" needs to be posted in the chat.handlebars "chatGPT-answer"


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
      console.log("============================");

    } else {
      console.error('Error:', response.status);
      chatGPTAnswer.textContent = 'Error fetching data from the server';
    }
  });
});
