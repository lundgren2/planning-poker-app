import React, { Component } from 'react';

export default class Login extends Component {
  state = {
    login: false,
  };

  static defaultProps = {
    login: false,
  };

  render() {
    return <div>Login Page</div>;
  }
}
