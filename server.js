const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());

let users = [];
app.post('/api/users', (req, res) => {
    const { name, renewalDate, date, status } = req.body;
    const user = {
      id: users.length + 1,
      name,
      renewalDate,
      date,
      status,
    };
    users.push(user);
    res.status(201).json(users);
  });

  




  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });