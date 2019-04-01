import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Plus } from 'react-feather';
import Logo from './Logo';

const Sidebar = styled('nav')`
  position: fixed;
  width: 250px;
  grid-area: sidebar;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  color: #ffffff;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  height: 100vh;
  padding: 100px 1em 1em 1em;
  flex-direction: column;
  a {
    padding: 0.5em;
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    font-size: 1.4em;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const LogoContainer = styled('div')`
  opacity: 0.7;
`;

export default () => (
  <Sidebar id="sidebar">
    <Logo />
    <Link to="/">Stories</Link>
    <Link to="/add-story">
      <Plus /> Add story
    </Link>
  </Sidebar>
);
