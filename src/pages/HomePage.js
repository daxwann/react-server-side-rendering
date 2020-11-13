import React, { Component } from "react";

class HomePage extends Component {
  logger() {
    console.log('JS is running');
  }

  render() {
    return (
      <div>
        <h1>My Home Page</h1>
        <p>Some content</p>
        <button onClick={this.logger}>Console Log</button>
      </div>
    );
  }
}

export default HomePage;
