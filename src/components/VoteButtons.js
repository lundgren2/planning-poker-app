import React from 'react';
import { Text } from '@rebass/emotion';
import { H2, H3 } from './Heading';

export default ({ controller }) => {
  const options = [0, 1 / 2, 3, 5, 8, 13];
  const DESCRIPTION_TEXT = `Each participant makes the time estimate by selecting the card from his deck of cards that best matches the estimated time. The cards contain figures that correspond to how long the development will take.`;

  return (
    <div>
      <H3>Select your card</H3>
      <Text color="#999" mb={4}>
        {DESCRIPTION_TEXT}
      </Text>
      <br />
      {options.map((option, index) => (
        <span key={index}>
          <input
            type="radio"
            name="value"
            value={option}
            onChange={controller}
          />
          <Text as="span" mr="2" fontSize={4}>
            {' '}
            {option}{' '}
          </Text>
        </span>
      ))}
    </div>
  );
};
