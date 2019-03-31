import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CompleteFlow from './CompleteFlow';
import LogoutFlow from './LogoutFlow';

export default ({ match }) => (
  <Switch>
    <Route path={`${match.url}/complete`} component={CompleteFlow} />
    <Route path={`${match.url}/logout`} component={LogoutFlow} />
  </Switch>
);
