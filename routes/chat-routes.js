const express = require('express');
const session = require('express-session');
const router = express.Router();

// Define the route to handle POST requests to '/openai-proxy'
router.post('/openai-proxy', async (req, res) => {
    try {
        const key = process.env.API_KEY;

        const response = await fetch("https://api.openai.com/v1/completions", {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${key}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "text-ada-001",
                prompt: JSON.stringify({ query: req.body.userQuery }),
                max_tokens: 50,
            }),
        });

        if (response.ok) {
            const responseData = await response.json();
            res.json(responseData);

        } else {
            res.status(response.status).json({ error: 'Error from OpenAI' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
