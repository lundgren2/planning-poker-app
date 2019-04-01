import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { DashboardView, LoginView } from '../views';
import UserAreaRouter from '../components/auth/UserAreaRouter';
import AuthenticationRouter from '../components/auth/AuthenticationRouter';
import Login from '../components/Login';

function DashboardView() {
  return <h2>Dashboard shit</h2>;
}

export default (
  <Router>
    <>
      <Switch>
        <Route path="/auth" component={AuthenticationRouter} />
        <UserAreaRouter>
          {({ isAuthenticated }) => {
            if (isAuthenticated) {
              return <Route path="/" component={DashboardView} />;
            }
            return <Route path="/" component={Login} />;
          }}
        </UserAreaRouter>
      </Switch>
    </>
  </Router>
);
