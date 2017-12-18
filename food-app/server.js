const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
//import in models

const server = express();
server.use(bodyParser.json());
server.use(morgan('combined'));
//rotues

server.get('/food', (req, res) => {
  res.send('Hello World!!!');
});

module.exports = server;
