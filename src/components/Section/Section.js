import React, { Component } from "react";
import Contact from "../Main/Contact";

class Section extends Component {
  render() {
    return (
      <div>
        <div className="container sections-wrapper">
          <div className="row">
            <div className="primary col-lg-8 col-12">
              <section className="about section">
                <div className="section-inner">
                  <h2 className="heading">About Me</h2>
                  <div className="content">
                    <p>
                      Write a brief intro about yourself. It's a good idea to
                      include your personal interests and hobbies as well. Lorem
                      ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                      commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec.
                      Commodo ligula eget dolor. Aenean massa.
                    </p>
                    <Contact />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
