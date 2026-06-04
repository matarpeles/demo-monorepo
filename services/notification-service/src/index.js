const express = require('express');
const app = express();

app.use(express.json());

app.post('/notify/email', (req, res) => {
  const { to, subject, body } = req.body;
  console.log(`Email to ${to}: ${subject}`);
  res.json({ status: 'sent' });
});

app.post('/notify/slack', (req, res) => {
  const { message } = req.body;
  console.log(`Slack: ${message}`);
  res.json({ status: 'sent' });
});

app.listen(process.env.PORT || 3003, () => {
  console.log('notification-service running');
});
