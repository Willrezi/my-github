import React, { Component, Fragment } from "react";
import axios from "axios";

import "./style.css";

class Home extends Component {
  state = {
    token: "",
    login: "",
    name: "",
    avatar_url: ""
  };

  componentDidMount() {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
    console.log(code);
    if (code) {
      axios
        .get("https://w-github.herokuapp.com/authenticate/" + code)
        .then(response => {
          console.log("response.data", response.data);
          //   if (response.data.token) {
          //     localStorage.setItem("token", response.data.token);
          //   }
          localStorage.setItem("token", response.data.token);
          this.setState({ token: response.data.token });
        })
        .then(() => {
          axios
            .get("https://api.github.com/user", {
              headers: { Authorization: "Bearer " + this.state.token }
            })
            .then(response => {
              console.log(response.data);
              this.setState({
                login: response.data.login,
                name: response.data.name,
                avatar_url: response.data.avatar_url
              });
            });
        });
    }
  }

  render() {
    return (
      <Fragment>
        <div className="home-container">
          <img
            className="img-container"
            src={this.state.avatar_url}
            alt="avatar"
          />
          <h2 className="name-container">{this.state.name}</h2>
          <h4 className="login-container">{this.state.login}</h4>
        </div>
      </Fragment>
    );
  }
}

export default Home;
