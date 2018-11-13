//Basic Node and Express - Get Route Parameter Input from the Client

var express = require('express');
var app = express();


app.get("/:word/echo", function(req, res) {
    console.log(req.params.word);
    res.json({ 'echo': req.params.word });

});