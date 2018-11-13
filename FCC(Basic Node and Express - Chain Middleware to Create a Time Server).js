//Basic Node and Express - Chain Middleware to Create a Time Server

var express = require('express');
var app = express();


app.get("/now", function(req, res, next) {
    req.time = new Date().toString();
    console.log(req.time);
    next();
}, function(req, res) {

    res.json({ time: req.time })
});