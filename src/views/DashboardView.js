import React from 'react';
import styled from '@emotion/styled';
import Sidebar from '../components/Sidebar';
import Container from '../components/Container';

const Wrapper = styled('div')`
  height: 100vh;
  display: grid;
  grid-template-columns: 290px auto;
  grid-template-rows: auto;
  grid-template-rows: ${props => props.theme.headerHeight} auto;
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
`;

export default ({ children }) => (
  <Wrapper>
    <Sidebar />
    <Main>
      <Container>{children}</Container>
    </Main>
  </Wrapper>
);
