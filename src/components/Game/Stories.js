import React from 'react';
import { H2 } from '../Heading';
import Card, { CardContainer, AddCard } from '../Card';

export default () => {
  const fetchStories = () => {
    // fetch here
  };

  return (
    <div>
      <H2>Stories</H2>
      <CardContainer>
        <Card />
        <AddCard />
      </CardContainer>
    </div>
  );
};
