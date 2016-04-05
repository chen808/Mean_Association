// ROUTES JS

// require messages controller
var messages = require('./../controllers/messages.js');

// require comments controller
var comments = require('./../controllers/comments.js');



module.exports = function(app){

	// GETS ==================================
	app.get('/get_Messages', function(req, res){
		messages.getMessages(req, res);
	})


	// POSTS =================================
	app.post('/createMessages', function(req, res){
		messages.createMessages(req, res);
	})
	app.post('/add_comment/:id', function(req, res){
		messages.createComments(req, res, req.params.id);
	})



};