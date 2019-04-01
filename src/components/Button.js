import React from 'react';
import { jsx, css } from '@emotion/core';
import { transparentize, lighten, darken } from 'polished';
import theme from '../config/theme';
import styled from '@emotion/styled';

const Button = styled('button')`
  background: ${props => (props.primary ? theme.brand.primary : 'white')};
  color: ${props => (props.primary ? 'white' : 'black')};
  font-size: 16px;
  margin: 1em;
  padding: 12px 16px;
  border: 2px solid ${theme.brand.primary};
  border-radius: 8px;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default Button;
