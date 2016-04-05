// MESSAGE MODEL

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// MessageSchema
var MessageSchema = new mongoose.Schema({
	name:String,
	message:String,
	// code below is used to associate a message '_id' to a 
	// comment '_id' which is like a foreign key
	comments: [{type: Schema.Types.ObjectId, ref:"Comment"}]
});



mongoose.model('Message', MessageSchema);


// *** message._id from controller message.js isn't
// able to be defined

// tried to insert { _id: false } at end, does not work

// added in _id:String, _id:Number, does not work
