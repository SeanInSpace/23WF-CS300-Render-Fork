const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h1>Form</h1>
    <form method="POST" action="/submit">
      <label>First Name:</label>
      <input type="text" name="firstName"><br><br>
      
      <label>Last Name:</label>  
      <input type="text" name="lastName"><br><br>
      
      <label>Email:</label>
      <input type="email" name="email"><br><br>
      
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', (req, res) => {
  const { firstName, lastName, email } = req.body;

  res.send(`
    <h1>Form Data</h1>
    <p>First Name: ${firstName}</p>
    <p>Last Name: ${lastName}</p>
    <p>Email: ${email}</p> 
  `);
});

app.listen(3000);
module.exports = app;
