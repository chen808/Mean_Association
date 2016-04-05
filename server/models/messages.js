// MESSAGE MODEL

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// MessageSchema
var MessageSchema = new mongoose.Schema({
	name:String,
	message:String,
	comment: [{type: Schema.Types.ObjectId, ref:'Comment'}]
});



mongoose.model('Message', MessageSchema);