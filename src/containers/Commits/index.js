import React, { Component, Fragment } from "react";
import "./style.css";
import axios from "axios";
import ListCommits from "../../components/ListCommits";

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
        // console.log("commits", this.state.commits);
      });
  }

  render() {
    localStorage.getItem("token");

    return (
      <Fragment>
        <div className="commits-container">
          <h1>Commits {this.props.location.repoName}</h1>
          <ListCommits list={this.state.commits} />
        </div>
      </Fragment>
    );
  }
}

export default Commits;
