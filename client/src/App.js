import React from 'react';
import Recipes from './components/Recipes';

import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo">Recipes</a>
        </div>
      </nav>
      <div className="row">
        <Recipes/>
      </div>
    </div>
  );
}

export default App;
