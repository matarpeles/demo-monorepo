const express = require('express');
const app = express();

app.use(express.json());

app.post('/payments', (req, res) => {
  res.json({ status: 'ok', id: `pay_${Date.now()}` });
});

app.get('/payments/:id', (req, res) => {
  res.json({ id: req.params.id, status: 'completed' });
});

app.listen(process.env.PORT || 3001, () => {
  console.log('payments-service running');
});
