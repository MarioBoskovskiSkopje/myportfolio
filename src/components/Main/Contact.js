import React, { Component } from "react";
import "./Main.css";

class Contact extends Component {
  render() {
    return (
      <div className="info aside section">
        <div className="section-inner contact-section">
          <h2 className="heading sr-only">Basic Information</h2>
          <div className="content">
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt" />
                <span className="sr-only">Location:</span>Skopje, Macedonia
              </li>
              <li>
                <i className="fas fa-envelope" />
                <span className="sr-only">Email:</span>
                <a href="mailto:marioboskovski123@gmail.com">
                  marioboskovski123@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
