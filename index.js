const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get("/shout", (req,res) => {
  let name=req.query.name;
  let upperCaseName=name.toUpperCase();
  res.send(upperCaseName);
})

app.get('/fullname', (req,res) =>{
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + ' ' + lastName;
  res.send(fullName);
})

app.get('/date', (req,res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formatteddate = month + ', ' + year;
  res.send(formatteddate);
})

app.get('/greet', (req,res) => {
  let name = req.query.name;
  let greetingMessage = 'Namaste, ' + name + '!';
  res.send(greetingMessage);
})

app.get('/address', (req,res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let address = street + ', ' + city + ', ' + state;
  res.send(address);
})

app.get('/email', (req,res) => {
  let username = req.query.username;
  let domain = req.query.domain;
  let email = username + "@" + domain;
  res.send(email);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
