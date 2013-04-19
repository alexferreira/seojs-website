var mongoose = require('mongoose')
var Schema = mongoose.Schema
    ,ObjectId = Schema.ObjectId;
var db_url = "mongodb://localhost:27017/todo",
    db = mongoose.connect(db_url);
var todoSchema = new Schema({
    content: String,
    completed: Boolean
});
var todo = db.model('todo', todoSchema);
