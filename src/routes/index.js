import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { DashboardView, LoginView } from '../views';
import { checkAuth } from '../components/auth/functions';
import Stories from '../components/game/Stories';
import AddStory from '../components/game/AddStory';

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
        <PrivateRoute exact path="/add-story" component={AddStory} />
      </DashboardView>
    </Switch>
  </Router>
);
