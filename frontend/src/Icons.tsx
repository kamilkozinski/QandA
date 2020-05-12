import React from 'react';
import user from './user.svg';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export const UserIcon = () => (
  <img
    src={user}
    alt="User"
    width="14px"
    css={css`
      width: 14px;
      opacity: 0.7;
    `}
  />
);
