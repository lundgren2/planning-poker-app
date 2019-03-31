import React from 'react';
import styled, { css } from '@emotion/styled';
import { PlusSquare } from 'react-feather';
import { Header, Image, Modal, Form } from 'semantic-ui-react';
import { Button } from '../Element';
import logo from '../../images/logo-black.svg';

const styles = {
  logo: css`
    opacity: 0.7;
    margin: 0 auto;
  `,
  modal: css`
    display: flex;
    flex-direction: column;
  `,
};

const ModalModalExample = ({ loginFunc }) => (
  <Modal
    trigger={
      <Button login>
        <PlusSquare />
        &nbsp;Create site
      </Button>
    }
    size="tiny"
  >
    <Modal.Content>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Button onClick={loginFunc}>Login</Button>
      </Form>
      <Image wrapped size="small" src={logo} className={styles.logo} />
    </Modal.Content>
  </Modal>
);

export default ModalModalExample;
