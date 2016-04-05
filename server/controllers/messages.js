// MESSSAGES CONTROLLER

var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');


module.exports = (function(){

	return {

		// methods goes here
		// getMessages: function(req, res){

		// 	Message.find({}, function(err, results){
		// 		if(err){
		// 			console.log('error getting data');
		// 		}
		// 		else{
		// 			res.json(results)
		// 		}
		// 	})
		// },


		getMessages: function(req, res){
			Message.find({})
			.populate('comment')
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
					console.log('Successfully created a quote');
				}
			})
		},


		createComments: function(req, res, id){
			Message.findOne({_id:req.params.id}, function(err, message){
				var comment = new Comment(req.body);

				comment._message = message.id;
				message.comment.push(comment);

				comment.save(function(err){
					message.save(function(err){
						if(err){
							console.log('Error');
						}
						else{
							res.redirect('/');
						}
					})
				})
			})
		},














	}






})(); // END MODULE.EXPORTS