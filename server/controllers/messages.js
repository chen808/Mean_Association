// MESSSAGES CONTROLLER

var mongoose = require('mongoose');

// 'Message' and 'Comment' objects below will give
// me actions on the MongoDB database
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');



module.exports = (function(){

	return {

		// display all message and comments to go along with it
		getMessages: function(req, res){
			Message.find({})
			.populate('comments')
			.exec(function(err, message){
				res.json('message', {message});

			})
		},

	
		createMessages: function(req, res){
			var message = new Message( {name:req.body.name, message:req.body.message} );

			message.save(function(err){
				if(err){
					res.render('index', {errors: message.errors})
				}
				else{
					console.log('Successfully created a message');
				}
			});
		},


		createComments: function(req, res, id){
			// find the message according to the id
			Message.findOne({ _id: req.params.id }, function(err, message){
				// getting the data from front end
				var comment = new Comment(req.body);

				// set the reference
				comment._message = message._id;
				// store the comments to message.comments
				message.comments.push(comment);
				// save the comments and message to database
				comment.save(function(err){
					message.save(function(err){
						if(err){
							console.log('Error');
						}
						else{
							res.redirect('/');
						}
					});
				});
			});
		},
	}



})(); // END MODULE.EXPORTS