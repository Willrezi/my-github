import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="header-container">
          <h2
            className="header-title"
            onClick={() => this.props.history.push("/home")}
          >
            Mon Github
          </h2>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Header);
