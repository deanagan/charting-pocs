/** @jsx jsx */
import { Header } from './Header';
import { HomePage } from './HomePage';
import { css, jsx } from '@emotion/core';
import { fontFamily, fontSize, gray2 } from './Styles';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AddRecipePage } from './AddRecipePage';
import { SearchRecipePage } from './SearchRecipePage';
import { SignInPage } from './SignInPage';
import { NotFoundPage } from './NotFoundPage';
import { RecipePage } from './RecipePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div
      css={css`
      font-family: ${fontFamily};
      font-size: ${fontSize};
      color: ${gray2};
    `}
>
      <Header />
      <Switch>
      <Route exact path="/recipes" component={HomePage} />
      <Route path="/recipes/search" component={SearchRecipePage} />
      <Route path="/recipes/add" component={AddRecipePage} />
      <Route path="/recipes/signin" component={SignInPage} />
      <Route exact path="/recipes/:recipeId" component={RecipePage} />
      <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
