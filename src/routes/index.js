import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { DashboardView, LoginView } from '../views';
import { checkAuth } from '../components/auth/functions';
import { Stories, Story, NewStory, Game } from '../components/game';

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
    <>
      <Route path="/login" component={LoginView} />
      <DashboardView>
        <PrivateRoute exact path="/" component={Stories} />
        <Switch>
          <PrivateRoute path="/stories/new" component={NewStory} />
          <PrivateRoute path="/stories/:id" component={Story} />
        </Switch>
        <PrivateRoute path="/game/:id" component={Game} />
      </DashboardView>
    </>
  </Router>
);
