var mongoose = require("mongoose");
//creating a new user schema or template,
// export it in mongoose so it can be required in different files
var Blogpost = new mongoose.Schema({
	text:String,
	date: {
		month: String,
		day: String,
		year: String
	}
	post:String,
	user:String
	title: String,
	comments: [{

	comments: String,
	user : String
	}]
});
//calling our model blogpost "posts"
module.exports = mongoose.model("posts", blogpost);