//Basic Node and Express - Serve Static Assets
var express = require('express');
var app = express();

app.get("/", function(req, res) { res.sendFile(__dirname + '/views/index.html') });
app.use("/", express.static(__dirname + '/public'));