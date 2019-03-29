import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h2
          className="header-title"
          onClick={() => this.props.history.push("/home")}
        >
          Mon GitHub
        </h2>
      </div>
    );
  }
}

export default withRouter(Header);
