import React, { Component, Fragment } from "react";

import ListRepos from "../ListRepos";
import "./style.css";

class Repos extends Component {
  render() {
    let repos = [];
    for (let i = 0; i < this.props.repos.length; i++) {
      repos.push(
        <ListRepos
          key={i}
          name={this.props.repos[i].name}
          description={this.props.repos[i].description}
          created={this.props.repos[i].created_at}
          private={this.props.repos[i].private}
        />
      );
    }
    return (
      <Fragment>
        <div className="repos-title">
          <h1>Mes repos</h1>
          {repos}
        </div>
      </Fragment>
    );
  }
}

export default Repos;
