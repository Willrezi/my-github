import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthLoadingScreen from "./containers/AuthLoadingScreen";
import Home from "./containers/Home";
import Header from "./components/Header";
import Commits from "./containers/Commits";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Route exact path="/" component={AuthLoadingScreen} />
          <Route path="/home" component={Home} />
          <Route path="/commits" component={Commits} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
