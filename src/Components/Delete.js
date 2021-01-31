import React, {Component} from "react"
import "../Styles/FunctionalStyles.css"

class Delete extends Component{

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.submitClicked = this.submitClicked.bind(this);

    }


    state  = {
        query: "",
        isChecked: false,
        message: ""
    }

    handleChange(event){
        const {value, name} = event.target
        this.setState({[name]: value})
    }

    submitClicked(){
        const {query} = this.state;
        fetch("http://localhost:8080/api/del/"+ query,{
            method: "Delete"
        })
            .then(response => response.json())
            .then(res =>{
                this.setState({ message: res.message })
            })
    }


    render(){
        return(
            <div className="menuComponent">
                <h3> Delete Video </h3>
                <input id="input" type="text" value={this.state.query} name="query" onChange={this.handleChange}
                       placeholder="Movie title"/>
                <button id="SubmitButton" type="submit" value={this.state.isChecked} name="isChecked"
                        onClick={this.submitClicked}> Delete
                </button>

                {this.state.message !== "" ? <p id="errorMessage"> {this.state.message} </p> : <p></p>}


            </div>
        )
    }

}

export default Delete
