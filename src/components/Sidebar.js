import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Plus } from 'react-feather';
import { logOut } from './auth/functions';
import Logo from './Logo';
// import { Link as RebassLink } from '@rebass/emotion';
// import media from '../utils/media';

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

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Credits = styled('div')`
  position: fixed;
  bottom: 40px;
  font-size: 60%;
  opacity: 0.5;
  a:hover {
    background: none;
  }
`;

export default () => (
  <Sidebar id="sidebar">
    <Logo />
    <Link to="/">Stories</Link>
    <Link to="/stories/new">
      <Plus /> New story
    </Link>
    <br />
    <Link onClick={logOut}>Sign out</Link>
    <Credits>
      <a
        href="https://www.github.com/lundgren2"
        target="_blank"
        rel="noopener noreferrer"
      >
        © 2019 Tobias Lundgren
      </a>
    </Credits>
  </Sidebar>
);
