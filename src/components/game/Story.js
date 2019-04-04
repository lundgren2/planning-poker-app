import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import Spinner from '../Spinner';
import { GET_STORY, DELETE_STORY } from './queries';
import Button from '../Button';
import { H2 } from '../Heading';

const Story = ({ match, history }) => (
  <Query query={GET_STORY} variables={{ id: match.params.id }}>
    {({ loading, error, data: { story } }) => {
      if (loading) return <Spinner />;
      if (error) return `Error!: ${error}`;
      if (!story) return <Redirect to="/" />;
      const { id, votes } = story;
      return (
        <div>
          <H2>{story.title}</H2> <br />
          {story.description}
          <br />
          Current average estimation:{' '}
          {votes && votes.length > 0
            ? votes
                .map(vote => vote.value)
                .reduce((sum, value) => sum + value) / votes.length
            : '0'}{' '}
          based on {votes.length} votes!
          <br />
          <Button to={`/game/${story.id}`} as={Link} primary>
            Start game
          </Button>
          <Button to="/" as={Link}>
            Back
          </Button>
          <Mutation
            mutation={DELETE_STORY}
            variables={{ id }}
            onCompleted={() => history.push(`/`)}
          >
            {mutation => (
              <Link to="" onClick={mutation}>
                Delete
              </Link>
            )}
          </Mutation>
          <hr />
          <h4>Data</h4>
          Link to story: <code>{window.location.href}</code>
          <p>Export card as JSON:</p>
          <code>{JSON.stringify(story, 0, 2)}</code>
        </div>
      );
    }}
  </Query>
);

export default Story;
