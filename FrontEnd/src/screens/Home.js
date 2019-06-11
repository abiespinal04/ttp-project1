import React, { Component } from "react";
import "../CSS/Home.css";
class Home extends Component {
  state = {};
  render() {
    return (
      <img
        src="https://www.dreadcentral.com/wp-content/uploads/2016/11/Generic-Scary-School.jpeg"
        className="homePicture"
        alt="pic"
      />
    );
  }
}

export default Home;
