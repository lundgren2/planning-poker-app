import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="App-header">
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
  );
}
