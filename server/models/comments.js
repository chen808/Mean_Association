// COMMENT MODEL

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// CommentSchema
var CommentSchema = new mongoose.Schema({
	// code below is used to associate the message '_id' to
	// a comment '_id', notice the underscore, that associate
	// this '_id' wiht the MessageSchema
	commenter: String,
	comment: String,
	_message: {type: Schema.Types.ObjectId, ref:'Message'}
});



mongoose.model('Comment', CommentSchema);