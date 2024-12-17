const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This will throw an error if the database is not available
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      // Handle the error gracefully
      console.error('Error fetching users:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});