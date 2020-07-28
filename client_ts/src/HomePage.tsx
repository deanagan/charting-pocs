/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { AddRecipeButton } from './Styles';
import { RecipeList } from './RecipeList';
import { getRecipes } from './RecipeData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const HomePage = () => (
  <Page>
    <div
    css={css`
      margin: 50px auto 20px auto;
      padding: 30px 20px;
      max-width: 600px;
    `}
  >
  <div
    css={css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
  >
      <PageTitle>Recipes</PageTitle>
      <AddRecipeButton>Add Recipe</AddRecipeButton>

  </div>
  <RecipeList data={getRecipes()} />
  </div>
  </Page>
);
