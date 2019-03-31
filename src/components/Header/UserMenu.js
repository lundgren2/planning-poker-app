import React from 'react';
import { Query } from 'react-apollo';
import { GET_CURRENT_USER } from '../auth/Queries';
import ProfilePicture from './ProfilePicture';

export default () => (
  <Query query={GET_CURRENT_USER}>
    {({ loading, error, data }) => {
      let text;
      let username = null;
      if (loading) {
        text = 'Loading...';
      } else if (error) {
        // TODO: (if had time) move query to HOC and display error in a message in dashboard
        text = `Error! ${error.message}`;
      } else {
        const user = data.currentUser;
        text = `${user.firstName} ${user.lastName}`;
        ({ username } = user);
      }

      return (
        <a href="#">
          <ProfilePicture username={username} /> {text}
        </a>
      );
    }}
  </Query>
);
