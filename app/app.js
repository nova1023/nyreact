// Include the Main React Dependencies
const React = require("react");
const ReactDOM = require("react-dom");

// Include React-Router Routes
//const Routes = require("./config/react-routes");

const Main = require("./components/Main")
// This code here allows us to render our main component (in this case Main)
ReactDOM.render(<Main />, document.getElementById("app"));
