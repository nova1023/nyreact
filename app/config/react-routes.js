// Include the React library
const React = require("react");

// Include the react-router module
const router = require("react-router");

// Include the Route component for displaying individual routes
const Route = router.Route;

// Include the Router component to contain all our Routes
const Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
const hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
const IndexRoute = router.IndexRoute;

// Reference the high-level components
const Main = require("../components/Main");
const Search = require("../components/children/Search")
const Saved = require("../components/children/Saved");


// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Info or Chat show the appropriate component */}
      <Route path="saved" component={Saved} />
     
      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Search} />

    </Route>
  </Router>

);