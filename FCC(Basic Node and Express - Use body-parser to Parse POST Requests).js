//Basic Node and Express - Use body-parser to Parse POST Requests

var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));