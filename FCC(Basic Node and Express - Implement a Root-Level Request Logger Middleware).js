//Basic Node and Express - Implement a Root-Level Request Logger Middleware

//set app.use function
app.use("/json", function(req, res, next) {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
});