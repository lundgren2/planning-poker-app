import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import { Flex } from '@rebass/emotion';
import Button from '../Button';
import Form from '../Form';
import InputText from '../InputText';
import { H2 } from '../Heading';
import { CREATE_STORY_MUTATION } from './queries';

class NewStory extends Component {
  state = {
    title: '',
    content: '',
  };

  render() {
    const { title, content } = this.state;
    return (
      <Flex flexDirection="column">
        <H2>Create new Story</H2>
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
            // onCompleted={() => this.props.history.push(`/`)}
          >
            {mutation => (
              <Button as="span" primary onClick={mutation}>
                Create story
              </Button>
            )}
          </Mutation>
        </Form>
      </Flex>
    );
  }
}

export default NewStory;
