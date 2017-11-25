var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.use(session({secret: 'codingdojorocks'}));
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function(request, res) {
    res.send("<h1>Hello Express</h1>");
})

app.get("/users", function (request, res){
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render('users', {users: users_array});
})

app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    res.send("You requested the user with id: " + req.params.id);
});

app.post('/users', function (req, res){
    req.session.name = req.body.name;
    console.log(req.session.name);
    console.log("POST DATA \n\n", req.body)  
    res.redirect('/users')
});

app.listen(8000, function() {
    console.log("Listening on 8000");
});