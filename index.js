const express = require('express');

const app = express();

app.get('/cailoz', (req, res) => {
  res.send('Hello World!');
});

app.listen(3003, () => {
  console.log('Server is running on http://localhost:3003');
});
