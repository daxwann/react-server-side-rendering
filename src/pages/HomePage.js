import React, { Component } from "react";
import { Helmet } from 'react-helmet';

class HomePage extends Component {
  logger() {
    console.log('JS is running');
  }

  head() {
    return (
      <Helmet>
        <title>My page title</title>
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.head()}
        <h1>My Home Page</h1>
        <p>Some content</p>
        <button onClick={this.logger}>Console Log</button>
      </div>
    );
  }
}

export default HomePage;
