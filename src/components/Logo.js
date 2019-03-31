import React from 'react';
import { jsx, css } from '@emotion/core';

export default function Logo() {
  return (
    <h1
      css={css`
        word-break: break-all;
        font-size: 4rem;
      `}
    >
      Planning Poker
    </h1>
  );
}
