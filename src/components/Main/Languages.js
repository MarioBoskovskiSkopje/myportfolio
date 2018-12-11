import React, { Component } from "react";
import "./Main.css";

class Languages extends Component {
  render() {
    return (
      <div className="languages aside section">
        <div className="section-inner inner">
          <h2 className="heading">Languages</h2>
          <div className="content">
            <div className="list-unstyled">
              <div className="item">
                <p className="title">
                  <strong>English:</strong>
                </p>
                <p className="level">
                  Native Speaker <br className="visible-xs" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Languages;
