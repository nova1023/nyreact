// Include React
const React = require("react");
const Moment = require("moment");
const Helper = require("../utils/helpers");

// This is the History component. It will be used to show a log of  recent searches.
const Saved = React.createClass({

  getInitialState: function() {
    return { saved: []};
  },
  
  // When component first mounted uses helper function to query db for all saved articles
  // then saves them to state before render is called.
  componentDidMount: function(prevProps, prevState) {
      
      Helper.getSaved()
      .then(function(saved){

        this.setState({"saved" : saved.data});    

      }.bind(this));  
  },

  handleClick: function(article){
    
    Helper.deleteSaved(article._id)
    .then(function(result){
      Helper.getSaved()
      .then(function(saved){            
        
        this.setState({"saved" : saved.data});  //this is to trigger render  

      }.bind(this));  
    }.bind(this));
    
  },
  // Here we describe this component's render method
  render: function() {

    if(this.state.saved.length > 0)
    {
    return (
      <div className="row">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Saved Articles</h3>
          </div>
          <div className="panel-body text-center">
            
            {this.state.saved.map(function(article, i) {
            return (
              <div className="well" key={i}>
                <h4>{article.title}</h4>
                
                <h6>Saved Date: { Moment(article.dateSaved).format('ddd MMMM Do YYYY').toString()}</h6>
                
                {/* In order for onClick to work we must bind Results 'this' to map callback function below.
                    Also we bind each 'search's' this to the handleClick and use that 'search' as a parameter*/}
                <button className="btn btn-warning" onClick={this.handleClick.bind(this, article)}>
                  <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                </button>
                
                <a href={article.url} target="_blank"><button className="btn btn-info">READ</button></a>
              </div>  
            );
          }.bind(this))}
          </div>
        </div>
      </div>  
    );
    }//end if
    else
    {
      return(
       <div className="row">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Saved Articles</h3>
          </div>
          <div className="panel-body text-center">
            <h1>No Saved Articles</h1>
          </div>
        </div>  
       </div> 
      )    
    } 

  }
});

// Export the component back for use in other files
module.exports = Saved;
