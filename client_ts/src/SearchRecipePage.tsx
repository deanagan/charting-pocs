

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FC, useState, useEffect } from 'react';
import { Page } from './Page';

import { RouteComponentProps } from 'react-router-dom';
import { RecipeList } from './RecipeList';
import { searchRecipes, RecipeData } from './RecipeData';


export const SearchRecipePage: React.FC<RouteComponentProps> = ({location }) => {
    const [language, description] = useState<RecipeData[]>([]);

    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get('criteria') || '';

    useEffect(() => {
        const searchForIt = async (criteria: string) => {
          const foundResults = await searchRecipes(criteria);
          //TODO: Set the recipe?
        };
        searchForIt(search);
    }, [search]);


    return <Page title="Search Results" />;
  };