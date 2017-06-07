// Include React
var React = require("react");
var Helper = require("../utils/helpers");
var Query = require('./search-children/Query');
var Results = require('./search-children/Results');
// Creating the Search component
var Search = React.createClass({

  getInitialState: function() {
    return { term: "", startYear: 1851, endYear: 2017, articles: [] };
  },

  componentDidUpdate: function(prevProps, prevState) {
    
  	// this prevents setState to keep triggering componentDidUpdtate 
  	if((this.state.term !== prevState.term) || (this.state.startYear !== prevState.startYear) 
  	 	|| (this.state.endYear !== prevState.endYear)){  	
    
  	  	Helper.runQuery(this.state.term, this.state.startYear, this.state.endYear)
  	  	.then(function(data){ 		
  				
  				// saves NYT queried articles to state
  				this.setState({"articles" : data}); 		
  		}.bind(this));
  	}	
  },

  setTerm: function(term, startYear, endYear){
  	// saves values from child component 'Query' to this components state. 
  	this.setState({"term": term, "startYear": startYear, "endYear": endYear});

  },
  
  render: function() {
    return (
      <div className="row">

        <Query setTerm={this.setTerm}/>
        <Results articles={this.state.articles}/>
       
      </div>  
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
