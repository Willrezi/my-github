import React, { Component } from "react";
import axios from "axios";

import key from "../../constants/key";
import "./style.css";

const STATUS = {
  INITIAL: "initial",
  LOADING: "loading",
  FINISHED_LOADING: "finished_loading",
  AUTHENTICATED: "authenticated"
};
class AuthLoadingScreen extends Component {
  state = {
    token: "",
    status: STATUS.INITIAL
  };

  componentDidMount() {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
    if (code) {
      this.setState({ status: STATUS.LOADING });

      axios
        .get("https://w-github.herokuapp.com/authenticate/" + code)
        .then(response => {
          console.log("response.data", response.data);
          sessionStorage.setItem("token", response.data.token);
          this.setState({
            token: response.data.token,
            statut: STATUS.FINISHED_LOADING
          });
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
