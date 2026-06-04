const express = require('express');
const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.json({ token: 'fake-jwt-token' });
  } else {
    res.status(400).json({ error: 'Missing credentials' });
  }
});

app.post('/logout', (req, res) => {
  res.json({ status: 'logged out' });
});

app.listen(process.env.PORT || 3002, () => {
  console.log('auth-service running');
});
