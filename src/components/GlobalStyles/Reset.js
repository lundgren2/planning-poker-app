import React from 'react';
import { Global, css } from '@emotion/core';

export default () => (
  <Global
    css={css`
      @import url('https://use.typekit.net/soy5ojy.css');

      body {
        font-family: azo-sans-web, sans-serif;
      }
    `}
  />
);
