// Include the axios package for performing HTTP requests (promise based alternative to request)
var Axios = require("axios");
var Moment = require("moment");


// Helper functions for making API Calls 
var helper = {

  // This function serves our purpose of running the query to NYT API.
  runQuery: function(searchTerm, startYear, endYear) {


    const KEY = "8f162c2306b14384be8a74adcd262f41";
    const NYT_ENDPOINT = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    var params = {
          'api-key': KEY,
          'q': searchTerm,
          'begin_date': startYear + "0101",
          'end_date': endYear + "1231"
    };

    return Axios.get(NYT_ENDPOINT, {params: params}).then(function(response) {
    
      // If we get a result
      if (response.data.response.docs[0]) {
        return response.data.response.docs;
      }
      
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getSaved: function() {
    return Axios.get("/api/saved");
  },

  // This function posts new searches to our database.
  postSaved: function(article) {
   
    var body = {
      "title": article.headline.main,
      "datePublished": Moment(article.pub_date),
      "url": article.web_url
    };
    return Axios.post("/api/saved", body);
  },

  deleteSaved: function(id){
    return Axios.delete("/api/saved/" + id);
  }
};

// We export the API helper
module.exports = helper;
