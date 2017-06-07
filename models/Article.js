var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {
		type: String,
		trim: true,
    	required: "Title is Required"
	},
	
  	datePublished: {
  		type: Date,
		required: "Date is Required"
	},
	
  	url:{
		type: String,
		trim: true,
  		required: "Url is Required"
	},
	
	dateSaved:{
		type: Date,
		default: Date.now
	}
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
