import React, { Component } from "react";
import "../CSS/Home.css";
class Home extends Component {
  state = {};
  render() {

    return (
      <div>
        <section class="fog">
          <div class="absolute-bg"></div>
          <div class="fog-container">
            <div class="fog-img fog-img-first"></div>
            <div class="fog-img fog-img-second"></div>
          </div>

          <div class="title">
            <h1 class = "ghost">Once you enter</h1>
            <h2 class = "ghost">You can never go back</h2>
          </div>
        </section>





      </div>
    );
  }
}

export default Home;
