/** @jsx jsx */
import { FC } from 'react';
import { css, jsx } from '@emotion/core';
import { RecipeData } from './RecipeData';
import { gray2, gray3 } from './Styles';

interface Props {
  data: RecipeData;
  showDescription?: boolean;
}

export const Recipe: FC<Props> = ({ data, showDescription = true }) => (
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
    { showDescription && (
        <div
          css={css`
            padding-bottom: 10px;
            font-size: 10px;
            font-style: normal;
            color: ${gray2};
          `}
        >
          {data.description.length > 50 ? `${data.description.substring(0, 50)}...`
            : data.description}
        </div>
    )}
  </div>
);
