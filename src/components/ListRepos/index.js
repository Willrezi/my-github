import React, { Component, Fragment } from "react";

import moment from "moment";
import "moment/locale/fr";
import "./style.css";
import axios from "axios";

class ListRepos extends Component {
  onClick = () => {
    axios
      .get("https://api.github.com/repos/Willrezi/airbnb-react-native/commits")
      .then(response => {
        console.log(response.data);
      });
  };

  render() {
    return (
      <Fragment>
        <div className="list-container">
          <h4 onClick={this.onClick}>{this.props.name}</h4>
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

export default ListRepos;
