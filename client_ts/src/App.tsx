/** @jsx jsx */
import { Header } from './Header';
import { HomePage } from './HomePage';
import { css, jsx } from '@emotion/core';
import { fontFamily, white2, fontSizeSmall } from './Styles';

import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { SearchRecipePage } from './SearchRecipePage';
import { SignInPage } from './SignInPage';
import { NotFoundPage } from './NotFoundPage';
import { RecipePage } from './RecipePage';

import { lazy, Suspense } from 'react';

const AddRecipePage = lazy(() => import('./AddRecipePage'));

const App: React.FC = () => {
  const { pathname } = useLocation();
  return (

    <div
      css={css`
      font-family: ${fontFamily};
      font-size: ${fontSizeSmall};
      color: ${white2};
    `}
>
      <Header />
      <Switch>
      <Redirect from="/:url*(/+)" to={pathname.slice(0,-1)} />
      <Route exact path="/recipes" component={HomePage} />
      <Route path="/recipes/search" component={SearchRecipePage} />
      <Route path="/recipes/add">
        <Suspense
          fallback={
            <div
              css={css`
                margin-top: 100px;
                text-align: center;
              `}
              >
            Loading...
            </div>
          }
          >
            <AddRecipePage/>
          </Suspense>
      </Route>
      <Route path="/recipes/signin" component={SignInPage} />
      <Route exact path="/recipes/:recipeId" component={RecipePage} />
      <Route component={NotFoundPage} />
      </Switch>
    </div>

  );
}

export default App;
