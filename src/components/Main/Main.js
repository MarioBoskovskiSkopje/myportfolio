import React, { Component } from "react";
import Skills from "./Skills";
import Education from "./Education";
import Languages from "./Languages";
import Conferences from "./Conferences";

import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="section-inner">
        <Skills />
        <div style={{ display: "flex", backgroundColor: "white" }}>
          <div className="left-col">
            <Education />
          </div>
          <div className="center-col">
            <Languages />
          </div>
          <div className="right-col">
            <Conferences />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
