import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_CURRENT_USER } from './Queries';
import FullscreenLoading from './FullscreenLoading';

export default ({ children }) => (
  <Query query={GET_CURRENT_USER}>
    {({ loading, error, data }) => {
      const isAuthenticated = !loading && !error && data.currentUser !== null;

      if (loading) {
        return <FullscreenLoading />;
      } else {
        return children({ isAuthenticated });
      }
    }}
  </Query>
);
