// Include React
const React = require("react");
//const Link = require("react-router").Link;

// Creating the Results component
var Query = React.createClass({
    // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "", startYear: 1851, endYear: 2017 };
  },

  // This function will respond to the user input
  handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term, this.state.startYear, this.state.endYear);
    this.setState({ term: "", startYear: 1851, endYear: 2017 });// resets state values when submit
  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Search Term</strong>
              </h4>
              
              <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />
              <h4 className="">
                <strong>Start Year</strong>
              </h4>
              <input
                value={this.state.startYear}
                type="number"
                className="form-control text-center"
                id="startYear"
                min="1851"
                max="2017"
                onChange={this.handleChange}
                required
              />
              <h4 className="">
                <strong>End Year</strong>
              </h4>
              <input
                value={this.state.endYear}
                type="number"
                className="form-control text-center"
                id="endYear"
                min="1851"
                max="2017"
                onChange={this.handleChange}
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
              
              {/*<Link to="/saved"><button className="btn btn-primary">Saved Articles</button></Link>*/}

            </div>
          </form>
        </div>
      </div>
    );
  }
});


// Export the component back for use in other files
module.exports = Query;
