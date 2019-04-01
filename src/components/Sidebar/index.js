import React from 'react';
import styled from '@emotion/styled';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Sidebar = styled('nav')`
  position: fixed;
  width: 250px;
  grid-area: sidebar;
  background-color: #fff;
  display: flex;
  color: #ffffff;
  border-right: 1px solid rgb(223, 231, 239);
  height: 100vh;
  padding: 100px 1em 1em 1em;
  flex-direction: column;
  a {
    padding: 0.5em;
    color: ${props => props.theme.baseColor};
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
    <LogoContainer>
      {/* <img src={logo} alt="logo" /> */}
      Logo
    </LogoContainer>
    <div>
      <a href="#">Sites</a>
      <a href="#">Statistics</a>
      <a href="#">Account</a>
    </div>
  </Sidebar>
);
