import React, { Component } from "react";
import GoogleLogin from "react-google-login";

const responseGoogle = response => {
  console.log("google console");
  console.log(response);
  // this.signup(response, "google");
};

export default class Authentication extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>Report an issue</h1>
        <GoogleLogin
          clientId="438808717513-79k7ngnput82ip4dqfr2ajs6cvm7htbf.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}
