import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Flex } from '@rebass/emotion';
import Spinner from '../Spinner';
import { GET_STORY } from './queries';

import Button from '../Button';
import Form from '../Form';
import InputText from '../InputText';
import { H2 } from '../Heading';

const Story = ({ match }) => (
  <Query query={GET_STORY} variables={{ id: match.params.id }}>
    {({ loading, error, data: { story } }) => {
      if (loading) return <Spinner />;
      if (error) return `Error!: ${error}`;
      if (!story) return <Redirect to="/" />;

      return (
        <div>
          <H2>{story.title}</H2>
          {story.content}
          <br />
          <Button to={`/game/${story.id}`} as={Link} primary>
            Start game
          </Button>

          <Button to="/" as={Link}>
            Back
          </Button>

          <hr />
          <p>Export card as JSON:</p>
          <code>{JSON.stringify(story, 0, 2)}</code>
        </div>
      );
    }}
  </Query>
);

export default Story;
