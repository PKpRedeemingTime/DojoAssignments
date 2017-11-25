var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongooseDashboard');
var PantherSchema = new mongoose.Schema({
    name:  { type: String, required: true},
    age: { type: Number, required: true, min: 0, max: 75 },
}, {timestamps: true });
mongoose.model('Panther', PantherSchema);
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
            res.render('index', { panthers: panthers });
        }
    })
})
app.get('/new', function(req, res) {
    res.render('new');
})
app.get('/:id/show', function(req, res) {
    Panther.find({_id:req.params.id}, function(err, response) {
        if(err) {
            console.log('something went wrong');
        } else {
            res.render('show', { panther: response[0] });
        }
    })
})
app.get('/:id/edit', function(req, res) {
    Panther.find({_id:req.params.id}, function(err, response) {
        if(err) {
            console.log('something went wrong');
        } else {
            res.render('edit', { panther: response[0] });
        }
    })
})
app.post('/panthers', function(req, res) {
  var panther = new Panther({name: req.body.name, age: req.body.age});
  panther.save(function(err) {
    if(err) {
      res.render('new', {title: 'you have errors!', errors: panther.errors})
    } else {
      console.log('successfully added a panther!');
      res.redirect('/');
    }
  })
})
app.post('/:id', function(req, res) {
    Panther.update({_id: req.params.id}, req.body, function(err, result) {
        if(err) {
            console.log(err);
        } else {
        res.redirect('/');
        }
    })
})
app.post('/:id/delete', function(req, res) {
    Panther.remove({_id: req.params.id}, function(err, result) {
        if(err) {
            console.log(err);
        } else {
        res.redirect('/');
        }
    })
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})