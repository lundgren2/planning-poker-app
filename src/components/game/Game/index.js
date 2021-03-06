import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import Spinner from '../../Spinner';
import GameStarted from './GameStarted';
import { H2 } from '../../Heading';

import { GET_STORY } from '../queries';

class Game extends Component {
  state = {
    started: false,
  };

  render() {
    const { match } = this.props;
    return (
      <Query query={GET_STORY} variables={{ id: match.params.id }}>
        {({ loading, error, data: { story } }) => {
          if (loading) return <Spinner />;
          if (error) return `Error!: ${error}`;
          if (!story) return <Redirect to="/" />;

          const { title, votes } = story;

          return (
            <div>
              <H2 mb={1}>Game started for: {title}</H2>
              Share game with your team:
              <div>
                <code>{window.location.href}</code>
              </div>
              <GameStarted story={story} />
              <br />
            </div>
          );
        }}
      </Query>
    );
  }
}
export default Game;
