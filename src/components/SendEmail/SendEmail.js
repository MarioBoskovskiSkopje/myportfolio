import React, { Component } from "react";

class SendEmail extends Component {
  render() {
    return (
      <div>
        <form
          action="https://formspree.io/marioboskovski123@gmail.com"
          method="POST"
        >
          <input type="text" name="name" />
          <input type="email" name="_replyto" />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default SendEmail;
