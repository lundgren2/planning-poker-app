import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Search, Bell, LogOut } from 'react-feather';
import UserMenu from './UserMenu';

const Container = styled('header')`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4em 0 2em;

  > ul {
    display: flex;
    align-items: center;
    height: 100%;
    li {
      list-style: none;
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
      a {
        text-decoration: none;
        color: ${props => props.theme.baseColor};
        display: flex;
        align-items: center;
      }
    }
  }

  > ul.header__nav-left li {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    &.active a::before {
      content: '';
      display: block;
      height: 3px;
      width: 100%;
      background-color: ${props => props.theme.primary};
      position: absolute;
      top: 0;
    }
    a {
      font-size: 1.25em;
    }
  }
}
`;

export default class Header extends Component {
  state = {
    activeItem: 'home',
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container id="header">
        <ul className="header__nav-left">
          <li className="active">
            <a href="#">Main Dashboard</a>
          </li>
          <li>
            <a href="#">Dashboard settings</a>
          </li>
        </ul>
        <ul className="header__nav-right">
          <li>
            <a href="#">
              <Search />
            </a>
          </li>
          <li>
            <a href="#">
              <Bell />
            </a>
          </li>
          <li>
            <UserMenu />
          </li>
          <li>
            <a href="#">
              <Link to="/auth/logout">
                <LogOut size={28} />
              </Link>
            </a>
          </li>
        </ul>
      </Container>
    );
  }
}
