import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Login from '../components/auth';
import Container from '../components/Container';
import Logo from '../components/Logo';
import { checkAuth } from '../components/auth/functions';

const Wrapper = styled('div')`
  /* height: 100vh;
  width: 100%; */
`;

export default (props, { history }) => {
  if (checkAuth()) history.push('/');

  return (
    <Wrapper id="App">
      <Container>
        <Logo
          css={css`
            text-align: center;
          `}
        />
        <Login {...props} />
      </Container>
    </Wrapper>
  );
};
