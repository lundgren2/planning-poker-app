// https://www.howtographql.com/react-apollo/5-authentication/
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { css } from '@emotion/core';
import { Flex, Box } from '@rebass/emotion';
import Button from './Button';
import Form from './Form';
import { H2 } from './Heading';
import Container from './Container';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  confirm = async data => {
    const { token } = data.login;
    this.saveUserData(token);
    this.props.history.push(`/`);
  };

  saveUserData = token => {
    localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN, token);
  };

  handleLoginClick = e => {
    e.preventDefaults();
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <Flex flexDirection="column">
          <Form>
            <H2>Login</H2>
            <br />
            <div>
              <input
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
                type="text"
                placeholder="timmy@acme.se"
              />
              <label htmlFor="input">Email</label>
            </div>
            <div>
              <input
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
                type="password"
                placeholder="Choose a safe password"
              />
              <label htmlFor="input">Password</label>
            </div>

            <Mutation
              mutation={LOGIN_MUTATION}
              variables={{ email, password }}
              onCompleted={data => this.confirm(data)}
            >
              {mutation => (
                <div onClick={mutation}>
                  <Button primary onClick={e => e.preventDefault()}>
                    Login
                  </Button>
                </div>
              )}
            </Mutation>
          </Form>
        </Flex>
      </Container>
    );
  }
}

export default Login;
