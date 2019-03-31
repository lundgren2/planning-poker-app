import React from 'react';
import { Global, css } from '@emotion/core';

export default () => (
  <Global
    css={css`
      body {
        background: #000;
      }
    `}
  />
);
