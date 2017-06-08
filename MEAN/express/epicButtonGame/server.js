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
var count = 0;
io.sockets.on('connection', function (socket){
    socket.on("update_count", function (data){
        count++;
        console.log(count);
        io.emit('count_updated', {response: count});
    })
    socket.on("reset_count", function (data){
        count = 0;
        console.log(count);
        io.emit('count_reset', {response: count});
    })
})