var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongooseDashboard');
var PantherSchema = new mongoose.Schema({
    name:  { type: String, required: true},
    qage: { type: String, required: true, min: 0, max: 75 },
}, {timestamps: true });
mongoose.model('User', UserSchema);
var Panther = mongoose.model('Panther')
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    Panther.find({}, function(err, panthers) {
        if(err) {
            console.log('something went wrong');
        } else {
            res.render('/', { panthers: panthers });
        }
    })
})
app.get('/show/:id', function(req, res) {
    Panther.find({}, function(err, panthers) {
        if(err) {
            console.log('something went wrong');
        } else {
            res.render('show', { panthers: panthers });
        }
    })
})
app.post('/panthers', function(req, res) {
    console.log("POST DATA", req.body);
  var panther = new Panther({name: req.body.name, age: req.body.age});
  panther.save(function(err) {
    if(err) {
      res.render('index', {title: 'you have errors!', errors: panther.errors})
    } else {
      console.log('successfully added a panther!');
      res.redirect('/show/:id');
    }
  })
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})