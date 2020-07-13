import React, { Component } from 'react';

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
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        var raw = JSON.stringify(recipe);

        var requestOptions = {
          method: 'POST',
          headers: headers,
          body: raw,
          redirect: 'follow'
        };

        fetch("http://localhost:8080/api/recipes", requestOptions)
          .then(response => response.text())
          .then(result => {
              console.log(result);
              window.location.reload();
          })
          .catch(error => console.log('error', error));
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
                        <input className="waves-effect waves-light btn" type="submit" name="action" value="Add Recipe" />
                    </div>


                </form>
            </div>
        );
    }
}
