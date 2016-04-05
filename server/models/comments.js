// COMMENT MODEL

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// CommentSchema
var CommentSchema = new mongoose.Schema({
	_message: {type: Schema.Types.ObjectId, ref:'Message'},
	commenter: String,
	comment: String
});



mongoose.model('Comment', CommentSchema);