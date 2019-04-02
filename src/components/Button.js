// import React from 'react';
import styled from '@emotion/styled';
import theme from '../config/theme';

const Button = styled('button')`
  background: ${props =>
    props.primary ? theme.colors.primary : 'rgba(255,255,255,0.1)'};
  color: ${props => (props.primary ? 'white' : 'white')};
  display: inline-block;
  font-size: 21px;
  /* min-width: 12rem; */
  margin: 18px 18px 18px auto;
  padding: 16px 4rem;
  border: 2px solid ${props => (props.primary ? theme.colors.primary : 'white')};
  border-radius: 3rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: ${props =>
      props.primary ? theme.colors.linkHover : 'rgba(255, 255, 255, 0.2)'};
    border-radius: 3rem;
  }
  &:focus {
    outline: none;
  }
`;

export default Button;
