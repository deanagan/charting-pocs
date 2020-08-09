/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { gray3, gray6 } from './Styles';
import { FC, useState, Fragment, useEffect } from 'react';
import { Page } from './Page';
import { RouteComponentProps } from 'react-router-dom';
import { RecipeData, getRecipe } from './RecipeData';
import { CommentList } from './CommentList';

interface RouteParams {
    recipeId: string;
}

export const RecipePage:FC<RouteComponentProps<RouteParams>> = ({
    match
}) => {
    const [recipe, setRecipe] = useState<RecipeData | null>(null);

    useEffect(() => {
        const doGetRecipe = async (recipeId: number) => {
            const recipeFound = await getRecipe(recipeId);
            setRecipe(recipeFound);
        };
        if (match.params.recipeId) {
            const recipeId = Number(match.params.recipeId);
            doGetRecipe(recipeId);
        }
    }, [match.params.recipeId]);

    return <Page>
            <div
            css={css`
                background-color: white;
                padding: 15px 20px 20px 20px;
                border-radius: 4px;
                border: 1px solid ${gray6};
                box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
                `}
            >

                <div
                css={css`
                    font-size: 19px;
                    font-weight: bold;
                    margin: 10px 0px 5px;
                    `}
                >
                    {recipe === null ? '' : recipe.name}
                </div>

                {recipe !== null && (
                    <Fragment>
                        <p
                            css={css`
                            margin-top: 0px;
                            background-color: white;
                            `}
                        >
                        {recipe?.description}
                        </p>
                        <div
                            css={css`
                            font-size: 12px;
                            font-style: italic;
                            color: ${gray3};
                            `}
                        >
                            {`Created by ${recipe.author}`}
                        </div>
                        <CommentList data={recipe.comments} />
                    </Fragment>
                )}
            </div>
        </Page>;
};