import React, { Component } from 'react';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';



export default class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/recipes')
        .then(response => response.json())
        .then(data => this.setState({recipes: data}))
    }
    render() {
        return (
            <div>
                <div className="row">
                    <AddRecipe />
                </div>

                    { this.state.recipes.map((recipe) => (
                        <div className="row" key = {recipe.id}>
                        <Recipe
                            recipe={recipe}
                        />
                        </div>
                    ))}
                </div>

        );
    }
}
