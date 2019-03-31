import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import logo from './logo.svg';
import './App.css';

function Index() {
  return <h2>Home</h2>;
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard/">Dashboard</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Router>
          <Route path="/" exact component={Index} />
          <PrivateRoute path="/dashboard/" component={Dashboard} />
        </Router>
      </div>
    );
  }
}

export default App;
