import gql from 'graphql-tag';

const GET_CURRENT_USER = gql`
  {
    currentUser {
      username
      firstName
      lastName
    }
  }
`;


const GET_USERS = gql`
  {
    users {
      username
      firstName
      lastName
    }
  }
`;

export { GET_CURRENT_USER, GET_USERS };
