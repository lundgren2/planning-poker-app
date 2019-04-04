import React, { Component } from 'react';
import { Subscription, Mutation } from 'react-apollo';
import { H2 } from '../../Heading';
import { UPDATE_STORY_SUBSCRIPTION, VOTE } from '../queries';
import VoteButtons from '../../VoteButtons';
import Button from '../../Button';
import Spinner from '../../Spinner';
import Chart from '../../Chart';

export default class GameStarted extends Component {
  state = {
    optionValue: null,
  };

  handleOptionChange = e => {
    this.setState({ optionValue: e.currentTarget.value });
  };

  render() {
    const { id, title, votes } = this.props.story;

    const { optionValue } = this.state;
    return (
      <div>
        <Mutation
          mutation={VOTE}
          variables={{ storyId: id, value: parseFloat(optionValue) }}
        >
          {mutation => (
            <form
              onSubmit={e => {
                e.preventDefault();
                mutation();
              }}
            >
              <VoteButtons controller={this.handleOptionChange} />
              <Button type="submit">Vote</Button>
            </form>
          )}
        </Mutation>
        <LiveView />
      </div>
    );
  }
}

export const LiveView = () => (
  <Subscription
    subscription={UPDATE_STORY_SUBSCRIPTION}
    // variables={story.id}
  >
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      const { id, title, votes } = data.storyUpdated;

      return (
        <>
          <H2>Game Started</H2>
          <h3>Votes</h3>
          <Chart votes={votes} />
          {votes.map((vote, index) => (
            <div key="index">{vote.value}</div>
          ))}
          <code>{JSON.stringify(data, null, 0)}</code>
        </>
      );
    }}
  </Subscription>
);
