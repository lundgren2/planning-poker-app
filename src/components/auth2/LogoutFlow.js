import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import FullscreenLoading from './FullscreenLoading';

const Cookies = require('js-cookie');

class LogoutFlow extends Component {
  componentWillMount() {
    this.setState({
      pending: true
    });

    Cookies.remove('ACCESS_TOKEN');
    this.props.client.resetStore()
      .then(() => {
        // We must wait for resetStore to finish before continuing, otherwise
        // we could mess up the internal state!

        this.setState({
          pending: false,
        });
      });
  }

  render() {
    if (this.state.pending) {
      return <FullscreenLoading />;
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default withApollo(LogoutFlow);

