const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
  //res.status(400).send('Hello World!');
});

// GET /users
// Give users name and age property
app.get('/users', (req, res) => {
  res.send([{
    name:'Ankita',
    age: 23
  }, {
    name:'Priti',
    age: 26
  }, {
    name: 'Arvind',
    age: 28
  }
  ]);
});


app.listen(3000);
module.exports.app = app;
