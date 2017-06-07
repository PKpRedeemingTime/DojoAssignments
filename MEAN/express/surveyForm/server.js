var express = require("express");
var path = require("path");
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
app.use(session({secret: 'secretname'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render("index");
})
app.get('/results', function(req, res) {
    res.render("results", {name: req.session.name, location: req.session.location, language: req.session.language, comment: req.session.comment});
})
app.post('/', function(req, res) {
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;
    console.log(req.session.name);
    console.log("POST DATA", req.body);
    res.redirect('/results');
})
app.listen(8000, function() {
    console.log("listening on port 8000");
});