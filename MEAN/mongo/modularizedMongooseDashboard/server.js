var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './angularFolder/dist')));
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
app.get('*', function(req, res){
    res.sendfile(path.resolve("./dist/index.html"));
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})