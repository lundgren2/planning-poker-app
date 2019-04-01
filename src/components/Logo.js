import React from 'react';
import styled from '@emotion/styled';
import { Aperture } from 'react-feather';
import { colors } from '../config/theme';

const Logo = styled('h1')`
  word-break: break-all;
  font-size: 3rem;
  font-style: italic;
  user-select: none;
  margin-bottom: 1rem;
`;

export default props => (
  <Logo {...props}>
    Planning P<Aperture size="0.6em" color={colors.primary} />
    ker
  </Logo>
);
