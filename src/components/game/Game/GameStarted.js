import React, { Component } from 'react';
import { Subscription } from 'react-apollo';
import { H2 } from '../../Heading';
import { UPDATE_STORY_SUBSCRIPTION } from '../queries';

export default class GameStarted extends Component {
  render() {
    const { id, title, votes } = this.props.story;
    return (
      <Subscription
        subscription={UPDATE_STORY_SUBSCRIPTION}
        // variables={story.id}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :</p>;
          console.log(data);
          return (
            <>
              <H2>Game Started</H2>
              <h3>Votes</h3>
              {JSON.stringify(data, null, 0)}
              {/* {votes.map(data.vote => (
                <div>{data.story.vote.value}</div>
              ))} */}
            </>
          );
        }}
      </Subscription>
    );
  }
}
