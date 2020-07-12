import React from 'react';

const Recipe = ({recipe}) => (
    <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{recipe.name} by {recipe.author}</span>
        </div>
        <div className="card-action">
          <p>{recipe.description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Recipe;
