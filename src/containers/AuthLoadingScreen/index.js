import React, { Component, Fragment } from "react";
import "./style.css";

class AuthLoadingScreen extends Component {
  render() {
    return (
      <Fragment>
        <div className="auth-container">
          <button className="auth-button">
            <i class="fab fa-github fa-2x" />
            Se connecter avec GitHub
          </button>
        </div>
      </Fragment>
    );
  }
}

export default AuthLoadingScreen;
