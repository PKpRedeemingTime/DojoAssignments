var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/quotingDojoRedux');
var UserSchema = new mongoose.Schema({
    name:  { type: String, required: true},
    quote: { type: String, required: true, maxlength: 100 },
}, {timestamps: true });
mongoose.model('User', UserSchema);
var User = mongoose.model('User')
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('index');
})
app.get('/quotes', function(req, res) {
    User.find({}, function(err, users) {
        console.log(users);
        if(err) {
            console.log('something went wrong');
        } else {
            console.log('successfully added a quote!');
            res.render('quotes', { users: users });
        }
    })
})
app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
  var user = new User({name: req.body.name, quote: req.body.quote});
  user.save(function(err) {
    if(err) {
      res.render('index', {title: 'you have errors!', errors: user.errors})
    } else {
      console.log('successfully added a quote!');
      res.redirect('/quotes');
    }
  })
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})