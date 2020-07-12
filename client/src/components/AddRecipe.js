import React, { Component } from 'react';
import axios from 'axios';

export default class AddRecipe extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            author: '',
            description: ''
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.onSubmitRecipe = this.onSubmitRecipe.bind(this);
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangeAuthor(event) {
        this.setState({author: event.target.value});
    }

    handleChangeDescription(event) {
        this.setState({description: event.target.value});
    }

    onSubmitRecipe(event) {
        event.preventDefault();

        let recipe = {
            name: this.state.name,
            author: this.state.author,
            description: this.state.description
        }

        const {history} = this.props;
        console.log(recipe);
        axios.post("http://localhost:8080/api/recipes", recipe).then(result => {
            history.push('/recipes');
        })

        window.location.reload();
    }

    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.onSubmitRecipe}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Placeholder" value={this.state.name} onChange={this.handleChangeName} type="text" className="validate"/>
                            <label htmlFor="name">Name of the Recipe</label>
                        </div>

                        <div className="input-field col s6">
                            <input value={this.state.author} onChange={this.handleChangeAuthor} type="text" className="validate"/>
                            <label htmlFor="author">Author</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <textarea value={this.state.description} onChange={this.handleChangeDescription} className="materialize-textarea"></textarea>
                            <label htmlFor="description">Steps and Ingredients</label>
                        </div>
                    </div>

                    <div className="row">
                        <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
                    </div>


                </form>
            </div>
        );
    }
}
