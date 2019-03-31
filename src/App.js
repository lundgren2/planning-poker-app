import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from './components/GlobalStyles';
import LoginView from './views/LoginView';
import theme from './config/theme';

import Header from './components/Header';

function Index() {
  return <h2>Home</h2>;
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyles />
          <Router>
            <Header />
            <Route path="/" exact component={Index} />
            <PrivateRoute path="/dashboard/" component={Dashboard} />
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
