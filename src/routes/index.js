import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import gql from 'graphql-tag';
import { DashboardView, LoginView } from '../views';
import Login from '../components/auth/Login';
import Stories from '../components/Stories';
import { checkAuth } from '../components/auth/functions';

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default (
  <Router>
    <Switch>
      <DashboardView>
        <PrivateRoute exact path="/" component={Stories} />
      </DashboardView>
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);
