import React, { Component, Fragment } from "react";
import axios from "axios";

import key from "../../constants/key";
import "./style.css";

class AuthLoadingScreen extends Component {
  //   state = {
  //     token: ""
  //   };

  //   componentDidMount() {
  //     const code =
  //       window.location.href.match(/\?code=(.*)/) &&
  //       window.location.href.match(/\?code=(.*)/)[1];
  //     console.log(code);
  //     if (code) {
  //       axios
  //         .get("https://w-github.herokuapp.com/authenticate/" + code)
  //         .then(response => {
  //           console.log("response.data", response.data);
  //           //   if (response.data.token) {
  //           //     localStorage.setItem("token", response.data.token);
  //           //   }
  //           localStorage.setItem("token", response.data.token);
  //           this.setState({ token: response.data.token });
  //         });
  //     }
  //   }

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
