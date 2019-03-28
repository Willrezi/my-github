import React, { Component, Fragment } from "react";

import key from "../../constants/key";
import "./style.css";

class AuthLoadingScreen extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default AuthLoadingScreen;
