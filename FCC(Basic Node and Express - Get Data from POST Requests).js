//Basic Node and Express - Get Data from POST Requests

var express = require('express');
var bodyParser = require('body-parser')
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));

app.post("/name", function(req, res) {
    var nameObj = req.body.first + ' ' + req.body.last;
    console.log({ "name": nameObj });
    res.send({ name: nameObj })
});