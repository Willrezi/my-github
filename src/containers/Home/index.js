import React, { Component, Fragment } from "react";
import axios from "axios";

import "./style.css";
import Repos from "../../components/Repos";

class Home extends Component {
  state = {
    code: "",
    token: "",
    login: "",
    name: "",
    avatar_url: "",
    repo_url: "",
    repos: [],
    url: ""
  };

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
                avatar_url: response.data.avatar_url,
                url: response.data.url,
                repo_url: response.data.repo_url
              });
            });
        })
        .then(async () => {
          await setTimeout(() => {
            axios
              .get(this.state.url + "/repos?sort=created", {
                headers: { Authorization: "Bearer " + this.state.token }
              })
              .then(response => {
                console.log("repo", response.data);
                this.setState({ repos: response.data });
              });
          }, 1000);
        });
    }
  }

  render() {
    return (
      <Fragment>
        <div className="home-container">
          <div className="left-container">
            {" "}
            <img
              className="img-container"
              src={this.state.avatar_url}
              alt="avatar"
            />
            <h2 className="name-container">{this.state.name}</h2>
            <h4 className="login-container">{this.state.login}</h4>
          </div>
          <Repos repos={this.state.repos} />
        </div>
      </Fragment>
    );
  }
}

export default Home;
