import React from 'react';
import { RotateCw } from 'react-feather';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const rotate = keyframes`
  from {
      -webkit-transform: rotate(0deg);
  }
  to {
      -webkit-transform: rotate(359deg);
  }
  `;

const Cover = styled('div')`
  > svg {
    position: absolute;
    left: 45%;
    right: 45%;
    top: 45%;
    bottom: 45%;
    width: 10%;
    height: 10%;
    -webkit-animation: ${rotate} 2s infinite linear;
  }
`;

export default () => (
  <Cover>
    <RotateCw />
  </Cover>
);
