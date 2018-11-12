//Basic Node and Express - Use the .env File
//set data with message
let data = { "message": "Hello json" };
//set app.get function
app.get("/json", function(req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase") { data.message = data.message.toUpperCase() }
    return res.json(data);
});