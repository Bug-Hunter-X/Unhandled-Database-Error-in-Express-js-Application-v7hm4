const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      // Log the error for debugging
      console.error('Error fetching users:', err);
      // Send a user-friendly error message
      return res.status(500).send('Something went wrong');
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});