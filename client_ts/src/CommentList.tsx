/** @jsx jsx */
import { FC } from 'react';
import { css, jsx } from '@emotion/core';
import { Comment } from './Comment';
import { gray5 } from './Styles';
import { CommentData } from './RecipeData';

interface Props {
  data: CommentData[];
}

export const CommentList: FC<Props> = ({ data }) => (
  <ul
    css={css`
      list-style: none;
      margin: 10px 0 0 0;
      padding: 0;
    `}
  >
    {' '}
    {data.map((comment) => (
      <li
        css={css`
          border-top: 1px solid ${gray5};
        `}
        key={comment.commentId}
      >
        {' '}
        <Comment data={comment} />{' '}
      </li>
    ))}{' '}
  </ul>
);
