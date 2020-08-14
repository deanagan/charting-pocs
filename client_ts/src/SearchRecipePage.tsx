/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FC, useState, useEffect } from 'react';
import { Page } from './Page';

import { RouteComponentProps } from 'react-router-dom';
import { RecipeList } from './RecipeList';
import { searchRecipes, RecipeData } from './RecipeData';

export const SearchRecipePage: React.FC<RouteComponentProps> = ({ location, }) => {
  const [recipes, setRecipe] = useState<RecipeData[]>([]);

  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get('criteria') || '';

  useEffect(() => {
    const searchForIt = async (criteria: string) => {
      const foundResults = await searchRecipes(criteria);
      setRecipe(foundResults);
    };
    searchForIt(search);
  }, [search]);

  return (
    <Page title="Search Results">
      {search && (
        <p
          css={css`
            font-size: 16px;
            font-style: italic;
            margin-top: 0px;
          `}
        >
          for "{search}"
        </p>
      )}
      <RecipeList data={recipes} />

    </Page>
  );
};
