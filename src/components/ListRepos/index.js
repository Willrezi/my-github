import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

import moment from "moment";
import "moment/locale/fr";
import "./style.css";

class ListRepos extends Component {
  state = {
    commits: []
  };

  render() {
    return (
      <Fragment>
        <div className="list-container">
          <Link
            to={{
              pathname: "/commits",
              repoName: this.props.name
            }}
          >
            <h4>{this.props.name}</h4>
          </Link>

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
