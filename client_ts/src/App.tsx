/** @jsx jsx */
import { Header } from './Header';
import { HomePage } from './HomePage';
import { css, jsx } from '@emotion/core';
import { fontFamily, fontSize, white2 } from './Styles';

import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { AddRecipePage } from './AddRecipePage';
import { SearchRecipePage } from './SearchRecipePage';
import { SignInPage } from './SignInPage';
import { NotFoundPage } from './NotFoundPage';
import { RecipePage } from './RecipePage';

const App: React.FC = () => {
  const { pathname } = useLocation();
  return (

    <div
      css={css`
      font-family: ${fontFamily};
      font-size: ${fontSize};
      color: ${white2};
    `}
>
      <Header />
      <Switch>
      <Redirect from="/:url*(/+)" to={pathname.slice(0,-1)} />
      <Route exact path="/recipes" component={HomePage} />
      <Route path="/recipes/search" component={SearchRecipePage} />
      <Route path="/recipes/add" component={AddRecipePage} />
      <Route path="/recipes/signin" component={SignInPage} />
      <Route exact path="/recipes/:recipeId" component={RecipePage} />
      <Route component={NotFoundPage} />
      </Switch>
    </div>

  );
}

export default App;
