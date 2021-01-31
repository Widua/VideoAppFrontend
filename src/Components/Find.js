import React, {Component} from "react";
import "../Styles/FunctionalStyles.css";

class Find extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.submitClicked = this.submitClicked.bind(this);
    }

    state = {
        query: "",
        isChecked: false,
        object: null,
        error: ""
    }

    handleChange(event) {
        const {value, name} = event.target
        this.setState({[name]: value})

    }


    submitClicked(event) {
        console.log(this.state.query)
        this.setState({object: null})
        const {value, name} = event.target;
        const {query} = this.state;
        this.setState({[name]: !value})

        fetch("http://localhost:8080/api/" + query, {
            method: "GET"
        })
            .then(result => result.json())
            .then(response => {
                if (response.message === "Video found") {
                    this.setState({object: response.object})
                } else {
                    this.setState({error: response.message})
                }
            })
    }


    render() {
        return (
            <div className="menuComponent">
                <h3> Find Video </h3>
                <input id="input" type="text" value={this.state.query} name="query" onChange={this.handleChange}
                       placeholder="Movie title"/>
                <button id="SubmitButton" type="submit" value={this.state.isChecked} name="isChecked"
                        onClick={this.submitClicked}> Search
                </button>
                {this.state.object !== null ?

                    <div className="film">
                        <p> Title: {this.state.object.title} </p>
                        <p> Production Time: {this.state.object.production}</p>
                        <p> Rating: {this.state.object.rating} </p>
                    </div>

                    : <p id="errorMessage">
                         {this.state.error}
                    </p>}


            </div>
        )
    }

}

export default Find
