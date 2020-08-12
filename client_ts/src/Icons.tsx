/** @jsx jsx */
import user from './user.svg';
import { css, jsx } from '@emotion/core';

export const UserIcon = () => (
  <img
    src={user}
    alt="User"
    css={css`
      width: 12px;
      opacity: 0.6;
      margin-left: 10px;
    `}
  />
);
