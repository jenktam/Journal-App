const express = require('express');
const app = express();
const path = require('path')
const volleyball = require('volleyball');
const bodyParser = require('body-parser')
const db = require('../db/_db');

// static middleware to serve static files in public folder
app.use(express.static(path.join(__dirname, '../public')))

// middleware
app.use(volleyball);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.use('/', require('./routes'))

// error handling middleware
app.use((err, req, res, next) => {
  err.status = err.status || 500;
  console.log(err);
  res.send(`An error occurred: ${err.status}`);
});

// serves react page on localhost:3000
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../browser/index.html'))
})

// set up server
db.sync()
.then(() => {
  app.listen(3000, () => console.log("Server is listening on port 3000!"));
})
.catch( err => console.log("There was an issue syncing with the database:", err))
