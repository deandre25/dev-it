const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  const index = req.query.index;
  const delay = Math.floor(Math.random() * 1000) + 1;

  setTimeout(() => {
    if (Math.random() > 0.02) { // 98% success rate
      res.send(index.toString());
    } else {
      res.status(429).send('Too Many Requests');
    }
  }, delay);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
