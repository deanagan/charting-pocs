/** @jsx jsx */
import { Header } from './Header';
import { HomePage } from './HomePage';
import { css, jsx } from '@emotion/core';
import { fontFamily, fontSize, gray2 } from './Styles';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { AddRecipePage } from './AddRecipePage';
import { SearchRecipePage } from './SearchRecipePage';
import { SignInPage } from './SignInPage';

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
      <Redirect from='/home' to='/' />
      <Route exact path='/' component={HomePage} />
      <Route path='/search' component={SearchRecipePage} />
      <Route path='/add' component={AddRecipePage} />
      <Route path='/signin' component={SignInPage} />
      </Switch>
  </div>
  </BrowserRouter>
  );
}

export default App;
