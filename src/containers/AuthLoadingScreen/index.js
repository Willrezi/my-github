import React, { Component } from "react";
import axios from "axios";

import key from "../../constants/key";
import "./style.css";

class AuthLoadingScreen extends Component {
  componentDidMount() {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
    if (code) {
      axios
        .get("https://w-github.herokuapp.com/authenticate/" + code)
        .then(response => {
          console.log("response.data", response.data);
          sessionStorage.setItem("token", response.data.token);
          this.props.history.push("/home", { token: response.data.token });
        });
    }
  }

  render() {
    return (
      <div className="auth-container">
        <a
          className="auth-button"
          href={
            "https://github.com/login/oauth/authorize?client_id=" +
            process.env.REACT_APP_CLIENT_ID +
            "&scope=user&redirect_uri=" +
            key.REDIRECT_URI
          }
        >
          <i className="fab fa-github fa-2x" />
          Se connecter avec GitHub
        </a>
      </div>
    );
  }
}

export default AuthLoadingScreen;
