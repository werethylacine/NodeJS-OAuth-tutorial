var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');

var configDB = require('./config/database.js');
mongoose.connect(configDB.url);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({ secret: 'anystringoftext',
                       saveUninitialized: true,
                       resave: true }));
app.use('/', function(req, res) {
  res.send('Log all the consoles!');
  console.log("Your cookies, m'am: ", req.cookies);
  console.log("Your session, m'am: ", req.session);
});

app.listen(port);
console.log('Server running on port: ' + port);
