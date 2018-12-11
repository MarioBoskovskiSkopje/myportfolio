import React, { Component } from "react";
import { getProfileData } from "../../Actions/facebookProfileDataActions";
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";
import SendEmail from "../SendEmail/SendEmail";
import Contact from "../Main/Contact";

import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProfileData();
  }
  renderImg() {
    //console.log(this.props.data.length > 0);
    let profileImg = this.props.data;
    return this.props.data.length > 0 ? (
      <img
        className="profile-image img-fluid float-left profile_img"
        src="https://avatars1.githubusercontent.com/u/33531217?s=400&u=1400740d7466c6a0a6c225ea6c67344ab8db4360&v=4"
        alt="Profile Img"
      />
    ) : (
      <Spinner />
    );
  }

  render() {
    return (
      <div>
        <header className="header">
          {this.renderImg()}
          <div className="container clearfix">
            <div className="profile-content float-left">
              <h1 className="name">Mario Boskovski</h1>
              <h2 className="desc">Full-Stack Developer</h2>
              <div className="social">
                <a
                  href="https://www.linkedin.com/in/mario-boskovski-55250844/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>

                <a
                  href="https://github.com/MarioBoskovskiSkopje"
                  target="_blank"
                >
                  <i className="fab fa-github-alt" />
                </a>

                <a
                  href="https://www.facebook.com/mario.boskovski"
                  target="_blank"
                >
                  <i className="fab fa-facebook" />
                </a>
              </div>
              <div />
            </div>
          </div>
          <div />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.facebookDataReducer
});

export default connect(
  mapStateToProps,
  { getProfileData }
)(Header);
