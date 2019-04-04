import gql from 'graphql-tag';

export const GET_STORY = gql`
  query story($id: ID!) {
    story(id: $id) {
      id
      title
      description
      active
      votes {
        value
      }
    }
  }
`;

export const GET_STORIES = gql`
  {
    stories {
      id
      title
      description
      author {
        name
      }
    }
  }
`;

export const DELETE_STORY = gql`
  mutation deleteStory($id: ID!) {
    deleteStory(id: $id) {
      id
    }
  }
`;

export const CREATE_STORY = gql`
  mutation createStory($title: String!, $description: String) {
    createStory(title: $title, description: $description) {
      title
    }
  }
`;

// export const VOTE = gql`
//   mutation vote($userId: ID!, $value: Float) {
//     vote(userId: ID!, value: value) {
//       id
//       value
//     }
//   }
// `;
