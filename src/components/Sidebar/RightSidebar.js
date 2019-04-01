import React from 'react';
import styled, { css } from '@emotion/styled';
// import logo from '../../images/logo-black.svg';

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${props => props.theme.headerHeight} 1em 1em 1em;

  > div {
    display: flex;
    flex-direction: column;
    a {
      padding: 0.5em;
      color: ${props => props.theme.baseColor};
      text-decoration: none;
      font-size: 1.4em;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

const LogoContainer = styled('div')`
  opacity: 0.7;
`;

const RightSidebar = () => (
  <Wrapper>
    <div>
      <a href="#">Sites</a>
      <a href="#">Statistics</a>
      <a href="#">Account</a>
    </div>
    <LogoContainer>
      {/* <img src={logo} alt="logo" /> */}
      Logo
    </LogoContainer>
  </Wrapper>
);

export default RightSidebar;
