const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle POST requests to /pp-hosted/secure/webhook
app.post('/pp-hosted/secure/webhook', (req, res) => {
  console.log('Webhook received.');

  // Log the received data
  console.log('Request body:', req.body);

  // Respond with a 200 status code
  res.status(200).send('Webhook received successfully.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
