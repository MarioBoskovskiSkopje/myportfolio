import React, { Component } from "react";
import "./Main.css";

class Conferences extends Component {
  render() {
    return (
      <div className="list conferences aside section">
        <div className="section-inner inner">
          <h2 className="heading">Conferences</h2>
          <div className="content">
            <ul className="list-unstyled">
              <li>
                <i className="far fa-calendar-alt" />{" "}
                <a href="https://www.bitola-hackathon.com/" target="_blank">
                  Bitola Hackaton 2018
                </a>{" "}
                (Bitola)
              </li>
              <li>
                <i className="far fa-calendar-alt" />{" "}
                <a href="http://www.codefest.eu/marathon" target="_blank">
                  Codefest 2018
                </a>{" "}
                (Ohrid)
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Conferences;
