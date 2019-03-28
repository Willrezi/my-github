import React, { Component, Fragment } from "react";
import "./style.css";
import axios from "axios";

class Commits extends Component {
  state = {
    commits: []
  };

  componentDidMount() {
    axios
      .get(
        "https://api.github.com/repos/Willrezi/" +
          this.props.location.repoName +
          "/commits"
      )
      .then(response => {
        console.log(response.data);
        this.setState({ commits: response.data });
        console.log("coommmits", this.state.commits);
        // this.props.history.push("/commits", this.state.commits);
      });
  }

  render() {
    localStorage.getItem("token");
    console.log("hhhhhhh", this.props.location.token);

    return <Fragment>{this.props.commits}</Fragment>;
  }
}

export default Commits;
