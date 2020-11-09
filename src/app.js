import React, { Component } from "react";
import { Switch, Route } from "react-router";
import HomePage from "./pages/HomePage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" render={(props) => <HomePage {...props} />} />
      </Switch>
    );
  }
}

export default App;
