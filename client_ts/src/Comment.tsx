/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { CommentData } from './RecipeData';
import { white3 } from './Styles';
import { FC } from 'react';

interface Props {
    data: CommentData;
}


export const Comment: FC<Props> = ({ data }) => (
    <div
        css={css`
         padding: 14px 0px;
        `}
    >
        <div
            css={css`
                padding: 14px 0px;
                font-size: 13px;
            `}
        >
            {data.comment}
        </div>
        <div
            css={css`
                font-size: 12px;
                font-style: italic;
                color: ${white3};
            `}
        >
        {`Topic ${data.topic} on
        ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
      </div>
    </div>
);