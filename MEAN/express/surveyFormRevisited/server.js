var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
 res.render("index");
});
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket){
    socket.on("posting_form", function (data){
        var random_number = Math.floor((Math.random() * 1000) + 1);
        socket.emit('updated_message', {response: data}); 
        socket.emit('random_number', {response: random_number}); 
    })
})