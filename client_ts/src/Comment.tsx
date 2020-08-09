/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { CommentData } from './RecipeData';
import { gray3 } from './Styles';
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
                color: ${gray3};
            `}
        >
        {`Comment by ${data.author} on
        ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
      </div>
    </div>
);