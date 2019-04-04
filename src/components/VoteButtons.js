import React from 'react';
import { Text } from '@rebass/emotion';

// TODO: (styles) hide radio buttons and style option text
export default ({ controller }) => {
  const options = [0, 1 / 2, 3, 5, 8, 13];
  const DESCRIPTION_TEXT = `Each participant makes the time estimate by selecting the card from his deck of cards that best matches the estimated time. The cards contain figures that correspond to how long the development will take.`;

  return (
    <div>
      <h2>Select your card</h2>
      <p>{DESCRIPTION_TEXT}</p>
      <br />
      {options.map((option, index) => (
        <>
          <input
            key={index}
            type="radio"
            name="value"
            value={option}
            onChange={controller}
          />
          <Text as="span" mr="2" fontSize={4}>
            {' '}
            {option}{' '}
          </Text>
        </>
      ))}
    </div>
  );
};
