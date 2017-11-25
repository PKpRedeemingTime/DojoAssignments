var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.use(session({secret: 'codingdojorocks'}));
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

var count = 0;

app.get("/", function (req, res){
    count++;
    req.session.count = count;
    res.render("index", {count: req.session.count});
});
app.post('/', function (req, res){
    count++
    req.session.count = count;
    res.redirect('/');
});
app.post('/reset', function (req, res){
    count = 0;
    req.session.count = count;
    res.redirect('/');
});

app.listen(8000, function() {
    console.log("Listening on 8000");
});