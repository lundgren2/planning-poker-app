import React from 'react';
import styled from '@emotion/styled';
import { Route, Switch } from 'react-router-dom';

import SiteRouter from '../Sites/SiteRouter';
import SiteContainer from '../Sites/SiteContainer';
import AuthenticationRouter from '../auth/AuthenticationRouter';

const Wrapper = styled('main')`
  grid-area: main;
  padding: ${props => props.theme.gutterSize};
`;

export default () => (
  <Wrapper id="main">
    <Switch>
      <Route exact path="/" component={SiteContainer} />
      <Route path="/sites" component={SiteRouter} />
    </Switch>
  </Wrapper>
);
