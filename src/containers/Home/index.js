import React, { Component, Fragment } from "react";
import axios from "axios";

import "./style.css";

class Home extends Component {
  state = {
    token: ""
  };

  componentDidMount() {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
    console.log(code);
    if (code) {
      axios
        .post(
          "https://github.com/login/oauth/access_token?client_id=65252bfe5bd013578e72&client_secret=6353ffd9004585a16702841c25d3154bae64f763&code=ed3425a34cc5474a951f",
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
        .then(response => {
          console.log(response.data);
        });
    }
    // if (code) {
    //   axios.get("https://api.github.com/user?code=" + code).then(response => {
    //     console.log(response.data);
    //     this.setState(code);
    //   });
    // }
  }

  render() {
    return <Fragment>This is the Home component</Fragment>;
  }
}

export default Home;
