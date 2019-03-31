import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { DashboardView, LoginView } from '../views';
import UserAreaRouter from '../components/auth/UserAreaRouter';
import AuthenticationRouter from '../components/auth/AuthenticationRouter';

function DashboardView() {
  return <h2>Dashboard shit</h2>;
}
function LoginView() {
  return <h2>Login here</h2>;
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
            return <Route path="/" component={LoginView} />;
          }}
        </UserAreaRouter>
      </Switch>
    </>
  </Router>
);
