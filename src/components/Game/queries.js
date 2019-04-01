import gql from 'graphql-tag';

export const GET_STORY = gql`
  query site($id: ID!) {
    story(id: $id) {
      id
      name
    }
  }
`;

export const GET_STORIES = gql`
  {
    stories {
      id
      title
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
