import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import FullscreenLoading from './FullscreenLoading';

const queryString = require('query-string');
const Cookies = require('js-cookie');

const SUCCESS = true;
const FAILURE = false;

// const [SUCCESS, FAILURE] = [true, false];

class CompleteFlow extends Component {
  componentWillMount() {
    const queryParameters = queryString.parse(window.location.search);
    const { code } = queryParameters;

    this.prepare();

    if (code !== undefined) {
      fetch(
        `${process.env.REACT_APP_GRAPHQL_URL}/auth/acquire_token?code=${code}`
      )
        .then(response => {
          if (response.status >= 400 && response.status < 600) {
            throw new Error('Bad response from server');
          }
          return response.text();
        })
        .then(token => {
          this.props.client.resetStore().then(() => {
            // Bad things will happen if we do this asynchronously!
            Cookies.set('ACCESS_TOKEN', token);
            this.complete(SUCCESS);
          });
        })
        .catch(() => {
          this.complete(FAILURE);
        });
    } else {
      this.complete(FAILURE);
    }
  }

  prepare() {
    this.setState({
      pending: true,
      success: false,
    });
  }

  complete(success) {
    this.setState({
      pending: false,
      success,
    });
  }

  render() {
    if (this.state.pending) {
      return <FullscreenLoading />;
    } else if (this.state.success) {
      return <Redirect to="/sites" />;
    }
    return <Redirect to="/login/failed" />;
  }
}

export default withApollo(CompleteFlow);
