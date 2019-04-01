// https://www.howtographql.com/react-apollo/5-authentication/
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Flex, Link } from '@rebass/emotion';
import styled from '@emotion/styled';
import Button from '../Button';
import Form from '../Form';
import { H2 } from '../Heading';

const StyledLink = styled(Link)`
  cursor: pointer;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin-left: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
  };

  render() {
    const { login, email, password, name } = this.state;
    return (
      <Flex flexDirection="column">
        <Form>
          <H2>{login ? 'Login' : 'Sign Up'}</H2>
          {!login && (
            <div>
              <input
                value={name}
                onChange={e => this.setState({ name: e.target.value })}
                type="text"
                placeholder="Your name"
              />{' '}
              <label htmlFor="input">Name</label>
            </div>
          )}
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
          <div>
            <Mutation
              mutation={LOGIN_MUTATION}
              variables={{ email, password }}
              onCompleted={data => this.confirm(data)}
            >
              {mutation => (
                <span onClick={mutation}>
                  <Button primary onClick={e => e.preventDefault()}>
                    {login ? 'Login' : 'Create account'}
                  </Button>
                </span>
              )}
            </Mutation>
            <StyledLink
              as="span"
              onClick={() => this.setState({ login: !login })}
            >
              {login
                ? 'Need to create an account?'
                : 'Already have an account?'}
            </StyledLink>
          </div>
        </Form>
      </Flex>
    );
  }

  confirm = async data => {
    const { token } = data.login;
    this.saveUserData(token);
    this.props.history.push(`/`);
  };

  saveUserData = token => {
    localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN, token);
  };
}

export default Login;

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
