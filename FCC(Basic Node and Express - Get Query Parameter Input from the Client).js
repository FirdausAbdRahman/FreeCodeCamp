//Basic Node and Express - Get Query Parameter Input from the Client

var express = require('express');
var app = express();


app.route("/name").get(function(req, res) {
    console.log({ "name": req.query.first + ' ' + req.query.last });
    res.json({ "name": req.query.first + ' ' + req.query.last })
});