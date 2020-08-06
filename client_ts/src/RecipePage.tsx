import React, { FC } from 'react';
import { Page } from './Page';
import { RouteComponentProps } from 'react-router-dom';

interface RouteParams {
    recipeId: string;
}

export const RecipePage:FC<RouteComponentProps<RouteParams>> = ({
    match
}) => <Page>Recipe Page {match.params.recipeId}</Page>;