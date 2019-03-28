import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

import moment from "moment";
import "moment/locale/fr";
import "./style.css";

class ListRepos extends Component {
  state = {
    commits: []
  };

  onClick = async () => {
    await setTimeout(() => {
      axios
        .get(
          "https://api.github.com/repos/Willrezi/" +
            this.props.name +
            "/commits"
        )
        .then(response => {
          console.log(response.data);
          this.setState({ commits: response.data });
          console.log("coommmits", this.state.commits);
          this.props.history.push("/commits", this.state.commits);
        });
    }, 500);
  };

  render() {
    return (
      <Fragment>
        <div className="list-container">
          {/* <Link
            to={{
              pathname: "/commits",
              repoName: this.props.name,
              token: localStorage.getItem("token")
            }}
          > */}
          <h4 onClick={this.onClick}>{this.props.name}</h4>
          {/* </Link> */}

          <p className="description">Description : {this.props.description}</p>
          <p>
            Repo créé le : {moment(new Date(this.props.created)).format("LL")}
          </p>
          <p>Repo : {this.props.private === false ? "Public" : "Privé"}</p>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(ListRepos);
