var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 6},
    age: { type: Number, required: true, min: 1, max: 150 },
}, {timestamps: true });
mongoose.model('User', UserSchema);
var User = mongoose.model('User')
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    User.find({}, function(err, users) {
    if(err) {
      console.log('something went wrong');
    } else {
      console.log('successfully added a user!');
      res.render('index', { users: users });
    }
    })
})
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
  var user = new User({name: req.body.name, age: req.body.age});
  user.save(function(err) {
    if(err) {
      res.render('errors', {title: 'you have errors!', errors: user.errors})
    } else {
      console.log('successfully added a user!');
      res.redirect('/');
    }
  })
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})