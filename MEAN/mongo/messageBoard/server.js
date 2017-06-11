var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/messageBoard');
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 4 },
    message: { type: String, required: true },
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
}, {timestamps: true });
var CommentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    name:  { type: String, required: true, minlength: 4 },
    comment: {type: String, required: true }
}, {timestamps: true });
mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);
var Message = mongoose.model('Message')
var Comment = mongoose.model('Comment')
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    Message.find({}, false, true).populate('_comments').exec(function(err, messages){
	    res.render('index.ejs', {messages: messages});
	});
})
app.post('/message', function(req, res) {
    var message = new Message({name: req.body.name, message: req.body.message});
    message.save(function(err) {
        if(err) {
            console.log(err);
            Message.find({}, false, true).populate('_comments').exec(function(err, messages){
                res.render('index.ejs', {messages: messages, errors: message.errors });
            });
        } 
        else {
        console.log('successfully added a message!');
        res.redirect('/');
        }
    })
})
app.post('/comment/:id', function(req, res) {
    var message_id = req.params.id;
    Message.findOne({_id: message_id}, function(err,message) {
        var comment = new Comment({name: req.body.name, comment: req.body.comment});
        comment._message = message._id;
        Message.update({_id: message._id}, {$push: {"_comments": comment}}, function(err) {});
        comment.save(function(err) {
            if(err) {
                console.log(err);
                res.render('index', {errors: comment.errors});
            }
            else {
                console.log("successfully added a comment!");
                res.redirect('/');
            }
        })
    })
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})