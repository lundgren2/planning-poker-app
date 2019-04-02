import gql from 'graphql-tag';

export const GET_STORY = gql`
  query story($id: ID!) {
    story(id: $id) {
      id
      title
      content
      active
    }
  }
`;

export const GET_STORIES = gql`
  {
    stories {
      id
      title
      content
      author {
        name
      }
    }
  }
`;

export const DELETE_STORY = gql`
  mutation deleteStory($id: ID) {
    deleteStory(id: $id) {
      id
      success
      error
    }
  }
`;

export const CREATE_STORY = gql`
  mutation createStory($title: String!, $content: String!) {
    creaeStory(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;
