import React from 'react';
import styled, { css } from '@emotion/styled';
import { PlusSquare } from 'react-feather';

export const CardContainer = styled('div')`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
`;

const CardItem = styled('div')`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.08), 0 8px 32px 0 rgba(0, 0, 0, 0.16);
  border: 0px solid #d1d6db;
  border-radius: 6px;
  background-color: #fff;
  padding: 1em;
  color: ${props => props.theme.baseColor};
  text-decoration: none;
  transition: ${props => props.theme.animation};
  cursor: pointer;
  .card-item__icon-container {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100%;
  }
  .card-item__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 240px;
    font-size: 5em;
    color: ${props => props.theme.baseColor};
    transition: ${props => props.theme.animation};
    opacity: 0.2;
  }
  &:hover .card-item__icon {
    color: ${props => props.theme.primary};
    opacity: 0.8;
  }
  &:hover {
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.08), 0 8px 32px 0 rgba(0, 0, 0, 0.32);
  }
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export default ({ img, text }) => (
  <CardItem class="card-item">
    <img src={img} alt="" srcSet="" />
    <span className="card-item__text">{text}</span>
  </CardItem>
);

export const AddCard = () => (
  <CardItem className="card-item">
    <div className="card-item__icon-container">
      <span className="card-item__icon">
        <PlusSquare size={100} />
      </span>
    </div>
    <span className="card-item__text">
      Add new site
      <i className="fas fa-arrow-right" />
    </span>
  </CardItem>
);
