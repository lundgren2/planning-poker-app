import React from 'react';
import styled, { css } from '@emotion/styled';
import {
  Home,
  PlusCircle,
  Sliders,
  BarChart2,
  MessageCircle,
  Settings,
} from 'react-feather';

const Wrapper = styled('div')`
  width: 100px;
  padding: 2.25em 0;
  text-align: center;
  align-items: center;
  background-color: ${props => props.theme.secondary};
  box-shadow: rgba(22, 23, 26, 0.15) 4px 4px 8px;

  > ul.sidebar__buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .middle li {
      margin: 0.5em auto;
    }

    li.sidebar__button {
      list-style: none;

      a {
        color: rgb(163, 175, 191);
        transition: ${props => props.theme.animation};
        &:hover {
          color: white;
        }
        > svg {
          width: 32px;
          height: 32px;
        }
      }
      &.active {
        a {
          color: white;
          opacity: 1;
          &: hover {
            opacity: 0.8;
          }
        }
        svg {
          opacity: 1;
        }

        &::after {
          content: '';
          display: block;
          height: 6px;
          width: 6px;
          background-color: ${props => props.theme.primary};
          border-radius: 50%;
          z-index: 999999;
          align-self: center;
          margin: 0.225em auto;
        }
      }
    }
  }
`;

const LeftSidebar = () => (
  <Wrapper>
    <ul className="sidebar__buttons">
      <li className="sidebar__button active">
        <a href="#" title="Home">
          <Home />
        </a>
      </li>
      <div className="middle">
        <li className="sidebar__button">
          <a href="#">
            <PlusCircle />
          </a>
        </li>
        <li className="sidebar__button">
          <a href="#">
            <MessageCircle />
          </a>
        </li>
        <li className="sidebar__button">
          <a href="#">
            <BarChart2 />
          </a>
        </li>
        <li className="sidebar__button">
          <a href="#">
            <Sliders />
          </a>
        </li>
      </div>
      <li className="sidebar__button">
        <a href="#">
          <Settings />
        </a>
      </li>
    </ul>
  </Wrapper>
);

export default LeftSidebar;
