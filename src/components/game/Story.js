import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import { Text } from '@rebass/emotion';
import Chart from '../Chart';
import Spinner from '../Spinner';
import { GET_STORY, DELETE_STORY } from './queries';
import Button from '../Button';
import { H2, H3 } from '../Heading';

const Story = ({ match, history }) => {
  // TODO: remove bad use of confirm =)
  const handleDeleteClick = func => {
    if (
      window.confirm(
        'Are you sure you want to delete this thing into the database?'
      )
    ) {
      return func();
    }
  };
  return (
    <Query query={GET_STORY} variables={{ id: match.params.id }}>
      {({ loading, error, data: { story }, refetch }) => {
        if (loading) return <Spinner />;
        if (error) return `Error!: ${error}`;
        if (!story) return <Redirect to="/" />;
        refetch();
        const { id, votes } = story;

        const voteEstimate =
          votes && votes.length > 0
            ? votes
                .map(vote => vote.value)
                .reduce((sum, value) => sum + value) / votes.length
            : 0;

        return (
          <div>
            <H2>{story.title}</H2> <br />
            <H3 color="#999">Description of the story</H3>
            <Text color="#999" mb={4}>
              {story.description}
            </Text>
            <br />
            <Text color="#999" mb={4}>
              {votes.length > 0 ? (
                <>
                  <Chart votes={votes} />
                  Current average estimation:{' '}
                  {Math.round(voteEstimate * 100) / 100} based on {votes.length}{' '}
                  votes!
                </>
              ) : (
                `No votes yet, let's start a game!`
              )}
            </Text>
            <Button to={`/game/${story.id}`} as={Link} primary>
              {votes.length > 0 ? 'Start new game' : 'Start game'}
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
                <Link
                  to=""
                  onClick={e => {
                    e.preventDefault();
                    handleDeleteClick(mutation);
                  }}
                >
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
};

export default Story;
