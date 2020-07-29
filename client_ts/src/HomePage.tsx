/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { AddRecipeButton } from './Styles';
import { RecipeList } from './RecipeList';
import { getRecipes, RecipeData } from './RecipeData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [recipes, setRecipes]
    = useState<RecipeData[] | null>(null);

  const [recipesLoading, setRecipesLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const recipes = await getRecipes();
      setRecipes(recipes);
      setRecipesLoading(false);
    })();
  }, []);

  const handleAddRecipeClick = () => {
    console.log('Add recipe function coming soon');
  };
  return (
  <Page>
      <div
          css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          `}
      >
      <PageTitle>Recipes</PageTitle>
      <AddRecipeButton onClick={handleAddRecipeClick}>Add Recipe</AddRecipeButton>

      </div>

    {
      recipesLoading ? (
        <div
          css={css`
                font-size: 18px;
                font-style: italic;
              `}>
            Loading yummy recipes...
        </div>
      ) : (
        <RecipeList data={ recipes || [] }/>
      )
    }

  </Page>
  );
};
