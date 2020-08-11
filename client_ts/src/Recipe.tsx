/** @jsx jsx */
import { FC } from 'react';
import { css, jsx } from '@emotion/core';
import { RecipeData } from './RecipeData';
import { white2, white3 } from './Styles';
import { Link } from 'react-router-dom';

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
      <Link
        css={css`
          text-decoration: none;
          color: ${white2};
        `}
        to={`recipes/${data.id}`}
        >
      {data.name}
      </Link>
    </div>{' '}
    <div
      css={css`
        font-size: 12px;
        font-style: italic;
        color: ${white3};
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
            color: ${white2};
          `}
        >
          {data.description.length > 50 ? `${data.description.substring(0, 50)}...`
            : data.description}

        </div>

    )}
  </div>
);
