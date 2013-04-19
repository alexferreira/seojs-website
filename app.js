/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var db = require('./database');
var Todo = mongoose.model('todo');

var express = require('express');

var http = require('http');

var app = module.exports = express();

var server = http.createServer(app);

// Configuration

app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    // disable layout
    app.set("view options", {layout:false});

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions:true, showStack:true }));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});

// index
app.get('/', function(req, res){
  res.render('index', { title: 'Ajax-Seo: Demo' })
});

app.get('/todos', function (req, res) {
    Todo.find({}, function (err, todos) {
        if (todos) {
            todos = todos.map(function(todo) {
                return {id: todo._id, content: todo.content, completed: todo.completed};
            });
            res.send({todos: todos});
        } else {
            res.send({todos: []});
        }
    })
});
app.put('/todos/:id', function (req, res) {
    var newTodo = req.body.todo;

    Todo.findOne({_id: req.params.id }, function (err, todo) {
        if (todo) {
            todo.content = newTodo.content;
            todo.completed = newTodo.completed
            todo.save();
            res.send({todo: {id: todo._id, content: todo.content, completed: todo.completed}});
        } else {
            res.send(404);
        }
    })
})
app.post('/todos', function (req, res) {
    var todo = Todo(req.body.todo);
    todo.save();
    res.send({todo: {id: todo._id, content: todo.content, completed: todo.completed}});
});
app.delete('/todos/:id', function (req, res) {
    var id = req.param('id')
    Todo.findOne({_id:id}, function (err, todo) {
        if (todo) {
            todo.remove()
            res.send(200)
        } else {
            res.send(404)
        }
    })
});

server.listen(3000, function () {
    console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);
});
