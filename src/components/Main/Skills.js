import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="skills aside section">
        <div className="section-inner">
          <h2 className="heading">Skills</h2>
          <div className="content">
            <p className="intro">
              Intro about your skills goes here. Keep the list lean and only
              show your primary skillset. You can always provide a link to your
              Linkedin or Coderwall profile so people can get more info there.
            </p>

            <div className="skillset">
              <div className="item">
                <h3 className="level-title">
                  Javascript &amp; jQuery
                  <span
                    className="level-label"
                    data-toggle="tooltip"
                    data-placement="left"
                    data-animation="true"
                    title="You can use the tooltip to explain more about your skill level..."
                  >
                    <i className="fas fa-info-circle" />
                    Expert
                  </span>
                </h3>
                <div className="level-bar">
                  <div className="level-bar-inner" data-level="96%" />
                </div>
              </div>

              <div className="item">
                <h3 className="level-title">
                  HTML &amp; CSS
                  <span
                    className="level-label"
                    data-toggle="tooltip"
                    data-placement="left"
                    data-animation="true"
                    title="You can use the tooltip to explain more about your skill level..."
                  >
                    <i className="fas fa-info-circle" />
                    Expert
                  </span>
                </h3>
                <div className="level-bar">
                  <div className="level-bar-inner" data-level="96%" />
                </div>
              </div>

              <div className="item">
                <h3 className="level-title">
                  Google Script
                  <span
                    className="level-label"
                    data-toggle="tooltip"
                    data-placement="left"
                    data-animation="true"
                    title="You can use the tooltip to explain more about your skill level..."
                  >
                    <i className="fas fa-info-circle" />
                    Intermediete
                  </span>
                </h3>
                <div className="level-bar">
                  <div className="level-bar-inner" data-level="85%" />
                </div>
              </div>

              <div className="item">
                <h3 className="level-title">
                  React JS
                  <span
                    className="level-label"
                    data-toggle="tooltip"
                    data-placement="left"
                    data-animation="true"
                    title="You can use the tooltip to explain more about your skill level..."
                  >
                    <i className="fas fa-info-circle" />
                    Intermediete
                  </span>
                </h3>
                <div className="level-bar">
                  <div className="level-bar-inner" data-level="85%" />
                </div>
              </div>

              <div className="item">
                <h3 className="level-title">
                  Node JS
                  <span
                    className="level-label"
                    data-toggle="tooltip"
                    data-placement="left"
                    data-animation="true"
                    title="You can use the tooltip to explain more about your skill level..."
                  >
                    <i className="fas fa-info-circle" />
                    Intermediete
                  </span>
                </h3>
                <div className="level-bar">
                  <div className="level-bar-inner" data-level="85%" />
                </div>
              </div>

              <div className="item">
                <h3 className="level-title">
                  Mongo DB
                  <span
                    className="level-label"
                    data-toggle="tooltip"
                    data-placement="left"
                    data-animation="true"
                    title="You can use the tooltip to explain more about your skill level..."
                  >
                    <i className="fas fa-info-circle" />
                    Intermediete
                  </span>
                </h3>
                <div className="level-bar">
                  <div className="level-bar-inner" data-level="85%" />
                </div>
              </div>

              <p>
                <a
                  className="more-link"
                  href="https://github.com/MarioBoskovskiSkopje?tab=repositories"
                  target="_blank"
                >
                  <i className="fas fa-external-link-alt" />
                  More on Github
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
