// import React from 'react';
import styled from '@emotion/styled';
import theme from '../config/theme';

const Button = styled('button')`
  background: ${props => (props.primary ? theme.colors.primary : 'white')};
  color: ${props => (props.primary ? 'white' : 'black')};
  font-size: 21px;
  min-width: 12rem;
  padding: 16px 32px;
  border: 2px solid ${theme.colors.primary};
  border-radius: 3rem;
  cursor: pointer;
  &:hover {
    background-color: ${theme.linkHover};
  }
  &:focus {
    outline: none;
  }
`;

export default Button;
