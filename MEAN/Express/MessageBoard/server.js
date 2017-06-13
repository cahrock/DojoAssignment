var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000,
    app = express();

// Express basic setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Mongoose connection, schema, model
mongoose.connect('mongodb://localhost/message_board_demo');
var Schema = mongoose.Schema;
// Message Schema
var MessageSchema = new Schema({
    name: {type: String, required: true, minlength:4},
    content: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

// Comment Schema
var CommentSchema = new Schema({
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    name: {type: String, required: true, minlength: 4},
    content:  {type: String, required: true}
}, {timestamps: true});

// Register Models
var Message = mongoose.model('Message', MessageSchema);
var Comment = mongoose.model('Comment', CommentSchema);

// Routes
app.get('/', function(req, res) {
    Message.find({})
    .populate('comments')
    .exec(function(err, results){
        if(err){
            console.log(err);
        };
        console.log(results);
        res.render('index', {messages: results});
    });
});

app.post('/message', function(req, res) {
    // console.log("POST DATA", req.body);
    Message.create(req.body, function(err, results){
        if(err){
            console.log(err);
        };
        res.redirect('/');
    });
})

app.post('/message/:id/comments', function(req, res) {
    // find message the comment will belong to
    Message.findOne({_id: req.params.id}, function(err, message){
        // create a comment using data from FORM
        var comment = new Comment(req.body);
        // set the reference like this
        comment._message = message._id;
        // the comment now belong to the messagw we found above
        // now, save both to the DB
        comment.save(function(err){
            //push the comment into the comments array of the message we found
            message.comments.push(comment);
            // save the updated message
            message.save(function(err){
                if(err){
                    console.log(err);
                }
                else{
                    res.redirect('/');
                };
            });
        });
    });
});

app.listen(8000, function() {
 console.log("listening on port", port);
});
