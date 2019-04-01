import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { H2 } from '../Heading';
import { GET_STORIES } from './queries';
import Spinner from '../Spinner';
import Card, { CardContainer, AddCard } from '../Card';

export default () => (
  <Query query={GET_STORIES}>
    {({ loading, error, data }) => {
      if (loading) return <Spinner />;
      if (error) return `Error! ${error.message}`;
      return (
        <>
          <H2>Stories</H2>
          <CardContainer>
            {data.stories.map(story => (
              <Link to={`/stories/${story.id}`}>
                <Card key={story.id} story={story} />
              </Link>
            ))}
            <Link to="/sites/new">
              <AddCard />
            </Link>
          </CardContainer>
        </>
      );
    }}
  </Query>
);
