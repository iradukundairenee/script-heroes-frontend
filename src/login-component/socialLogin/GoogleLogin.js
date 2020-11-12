import React, { Component } from "react";
import googleLogo from "./img/googleLogo.png";
import "./login.scss";

class GoogleLogin extends Component {
  render() {
    return (
      <a href="http://localhost:3000/users/auth/google" className="loginButton">
        <img src={googleLogo} className="loginLogo" />
        <span className="loginBtnText">Sign in with Google</span>
      </a>
    );
  }
}
export default GoogleLogin;
