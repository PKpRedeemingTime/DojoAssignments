var express = require("express");
var path = require("path");
var app = express();
var users = [];
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
    socket.on("send_username", function (data){
        users.push({id:socket.id, username:data.username});
        var names_arr = users.map(function(x) {
            return x.username;
        })
        socket.emit('send_username', {current_user:users[users.length - 1], all_users:names_arr})
    })
    socket.on("send_message", function(data) {
        var sender = users.find(function(x) {
            return x.id == data.sender;
        })
        data.sender = sender.username;
        io.emit("#send_message", data);
    })
})