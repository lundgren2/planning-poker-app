import React from 'react';
import styled from '@emotion/styled';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Container = styled('nav')`
  position: fixed;
  width: 250px;
  grid-area: sidebar;
  background-color: #fff;
  display: flex;
  color: #ffffff;
  border-right: 1px solid rgb(223, 231, 239);
  height: 100vh;
`;

export default () => (
  <Container id="sidebar">
    <LeftSidebar />
    <RightSidebar />
  </Container>
);
