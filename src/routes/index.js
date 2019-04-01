import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { DashboardView, LoginView } from '../views';
import { checkAuth } from '../components/auth/functions';
import Stories from '../components/Stories';

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
      <Route path="/login" component={LoginView} />
      <DashboardView>
        <PrivateRoute exact path="/" component={Stories} />
      </DashboardView>
    </Switch>
  </Router>
);
