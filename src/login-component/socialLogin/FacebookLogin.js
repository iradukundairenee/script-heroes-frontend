import Axios from "axios";
import React, { Component } from "react";
import facebookLogo from "./img/facebookLogo.jpg";
import "./login.scss";
import { Route } from "react-router-dom";

class FacebookLogin extends Component {
  render() {
    return (
      <a
        href="http://localhost:3000/users/auth/facebook"
        className="loginButton"
      >
        <img src={facebookLogo} className="loginLogo" />
        <span className="loginBtnText">Sign in with Facebook</span>
      </a>
    );
  }
}
export default FacebookLogin;
