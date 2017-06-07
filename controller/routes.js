const Article = require("../models/Article.js");

module.exports = function(app){
	
	
	// Route used to query MongoDB for all saved articles.

	app.get("/api/saved", function(req, res) {

	  //We will find all the records, sort it in descending order.
	  Article.find({}).sort([
	    ["date", "descending"]
	  ]).exec(function(err, doc) {
	    if (err) {
	      console.log(err);
	    }
	    else {
	      res.send(doc);
	    }
	  });
	});

	// This is the route we will send POST requests to save each article.
	app.post("/api/saved", function(req, res) {
	  
	  //Here we'll save the article based on the JSON input.
	  Article.create(req.body, function(err, doc) {
	    if (err) {
	      console.log(err);
	    }
	    else {
	      res.send(doc);
	    }
	  });
	});

	//Route used to delete a saved article in the database
	app.delete("/api/saved/:id", function(req, res) {
	  	
	  	Article.remove({"_id": req.params.id}, function(error, doc) {
		    // Log any errors
		    if (error) 
		    {
		      console.log(error);
		    }
		    else
		    {
		    	res.send(doc);
		    }	
	  	});
	});

	// Main Route. This will redirect the user to our rendered React application
	app.get("*", function(req, res) {
	
	//res.send(__dirname  + "/public/index.html");	
	  res.sendFile(process.cwd() + '/public/index.html');
	});


};// END module.exports

