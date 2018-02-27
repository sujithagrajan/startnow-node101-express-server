// import files and packages up here
var express = require('express');
// create your express server below
var app = express();
var morgan = require('morgan');
app.use(morgan('dev'));
// add your routes and middleware below
app.get('/', function(req,res){
    res.send('Hello');
});

app.get('/data', function(req,res){
    res.sendFile(__dirname + '/data.json');
});

// finally export the express application
module.exports = app;
