const express = require('express');
const app = express();
const port = 3000; // Set your desired port

const { OpenAIApi } = require('openai');
const openai = new OpenAIApi({ key: process.env.KEY });

app.use(express.json());

app.post('/ask', async (req, res) => {
  const { question } = req.body;

  try {
    const response = await openai.createChatCompletion({
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: question }],
    });

    const answer = response.data.choices[0].message.content;
    res.json({ answer });
  } catch (error) {
    console.error('OpenAI Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
