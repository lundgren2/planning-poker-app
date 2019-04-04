import React from 'react';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';
import { keyframes } from '@emotion/core';
import Sidebar from '../components/Sidebar';
import Container from '../components/Container';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled('div')`
  height: 100vh;
  display: grid;
  grid-template-columns: 290px auto;
  grid-template-rows: auto;
  grid-template-rows: 25px auto;
  grid-template-areas:
    'sidebar header'
    'sidebar main';
  @media (max-width: 600px) {
    grid-gap: 0;
    grid-template-rows: auto 1fr auto auto;
    grid-template-areas:
      'header'
      'main'
      'sidebar';
  }
`;

const Main = styled('main')`
  grid-area: main;
  height: 100vh;
  position: relative;
  animation: ${fadeIn} 1s ease;
  will-change: opacity;
`;

const DashboardView = ({ children, location }) => {
  if (location && location.pathname === '/login') return false;

  return (
    <Wrapper>
      <Sidebar />
      <Main>
        <Container>{children}</Container>
      </Main>
    </Wrapper>
  );
};

export default withRouter(DashboardView);
