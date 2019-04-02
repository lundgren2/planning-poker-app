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

export const DELETE_STORY_MUTATION = gql`
  mutation deleteStory($id: ID) {
    deleteStory(id: $id) {
      id
    }
  }
`;

export const CREATE_STORY_MUTATION = gql`
  mutation CreateStory($title: String!, $content: String!) {
    createStory(title: $title, content: $content) {
      title
    }
  }
`;
