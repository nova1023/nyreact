// Include React
var React = require("react");


// Here we include all of the sub-components
var Search = require("./children/Search");
var Saved = require("./children/Saved");


// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({
  render: function() {
    return (
    <div>
      <header className="text-center">
        <h1>New York Times Search</h1>
      </header>
      <br/>
      <div className="container">  
      
        <Search />
        <Saved />
      

      </div>
    </div>  
    );
  } 
});


// Export the component back for use in other files
module.exports = Main;

