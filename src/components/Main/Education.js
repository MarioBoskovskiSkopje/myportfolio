import React, { Component } from "react";
import "./Main.css";

class Education extends Component {
  render() {
    return (
      <div className="education aside section">
        <div className="section-inner inner">
          <h2 className="heading">Education</h2>
          <div className="content">
            <div className="item">
              <h3 className="title">
                <i className="fas fa-graduation-cap" />
                Web Developer
              </h3>
              <h4 className="university">
                Seavus Education Center{" "}
                <span className="year">(2017-2018)</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
