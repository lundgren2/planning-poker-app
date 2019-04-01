import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import { Flex } from '@rebass/emotion';
import Button from '../Button';
import Form from '../Form';
import InputText from '../InputText';
import { H2 } from '../Heading';

class AddStory extends Component {
  state = {
    title: '',
    content: '',
  };

  render() {
    const { title, content } = this.state;
    return (
      <Flex flexDirection="column">
        <H2>Add Story here!</H2>
        <Form>
          <InputText
            onChange={e => this.setState({ title: e.target.value })}
            value={title}
            placeholder="Title of story"
          />
          <InputText
            onChange={e => this.setState({ content: e.target.value })}
            value={content}
            placeholder="Describe the story"
          />
          <Mutation
            mutation={CREATE_STORY_MUTATION}
            variables={{ title, content }}
            // onCompleted={this.props.history.push(`/stories`)}
          >
            {mutation => (
              <span onClick={mutation}>
                <Button primary onClick={e => e.preventDefault()}>
                  Add story
                </Button>
              </span>
            )}
          </Mutation>
        </Form>
      </Flex>
    );
  }
}

export default AddStory;

const CREATE_STORY_MUTATION = gql`
  mutation CreateStory($title: String!, $content: String!) {
    createStory(title: $title, content: $content) {
      title
    }
  }
`;
