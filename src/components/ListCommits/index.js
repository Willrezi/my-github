import React, { Component, Fragment } from "react";
import "./style.css";
import moment from "moment";
import "moment/locale/fr";

class ListCommits extends Component {
  render() {
    const listCommit = [];
    for (let i = 0; i < this.props.list.length; i++) {
      listCommit.push(
        <div key={i}>
          <h4>
            {moment(new Date(this.props.list[i].commit.author.date)).format(
              "LL"
            )}
          </h4>
          ,
          <p className="list-description">
            {this.props.list[i].commit.message}
          </p>
        </div>
      );
    }

    return <Fragment>{listCommit}</Fragment>;
  }
}

export default ListCommits;
