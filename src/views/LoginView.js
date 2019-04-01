import React from 'react';
import Login from '../components/auth';
import Container from '../components/Container';
import Logo from '../components/Logo';
import { checkAuth } from '../components/auth/functions';

export default (props, { history }) => {
  // if (checkAuth()) history.push('/');

  return (
    <Container border>
      <Logo style={{ textAlign: 'center', color: 'white' }} />
      <Login {...props} />
    </Container>
  );
};
