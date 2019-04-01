import React from 'react';
import styled from '@emotion/styled';
import Container from '../components/Container';

const Wrapper = styled('div')`
  height: 100vh;
  width: 100%;
`;

export default ({ children }) => (
  <Wrapper id="App">
    <Container>{children}</Container>
  </Wrapper>
);
