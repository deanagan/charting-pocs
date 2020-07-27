/** @jsx jsx */
import { FC } from 'react';
import { css, jsx } from '@emotion/core';
import { RecipeData } from './RecipeData';
import { gray3 } from './Styles';

interface Props {
  data: RecipeData;
}

export const Recipe: FC<Props> = ({ data }) => (
  <div
    css={css`
      padding: 10px 0px;
    `}
  >
    {' '}
    <div
      css={css`
        padding: 10px 0px;
        font-size: 19px;
      `}
    >
      {' '}
      {data.name}{' '}
    </div>{' '}
    <div
      css={css`
        font-size: 12px;
        font-style: italic;
        color: ${gray3};
      `}
    >
      {' '}
      {`By ${data.author}`}
      {' '}
    </div>
    <div
      css={css`
        font-size: 10px;
        font-style: normal;
        color: ${gray3};
      `}
    >
      {' '}
      {`${data.description}`}
      {' '}
    </div>
  </div>
);
