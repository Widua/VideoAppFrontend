import React, {Component} from "react"
import "../Styles/FunctionalStyles.css"


class Add extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    state = {
        title: "",
        production: new Date(),
        rating: "0",
        message: ""
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    submit(){
        const {title, production} = this.state;
        let rating = parseInt(this.state.rating,10);
        const obj = {title,production, rating };
        fetch("http://localhost:8080/api/add",{
            headers:{
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(res => {
                this.setState({message: res.message})
            })



    }


    render() {
        const {title, production, rating} = this.state
        return (
            <div className="menuComponent">
                <h3> Insert data about film </h3>
                <label> Film name: </label>
                <input type="text" name="title" value={title} onChange={this.handleChange}/> <br/>
                <label> Production time: </label>
                <input type="date" name="production" value={production} onChange={this.handleChange}/> <br/>
                <label> Rating </label>
                <input type="radio" value="1" name="rating" checked={rating === "1"} onChange={this.handleChange}/> 1
                <input type="radio" value="2" name="rating" checked={rating === "2"} onChange={this.handleChange}/> 2
                <input type="radio" value="3" name="rating" checked={rating === "3"} onChange={this.handleChange}/> 3
                <input type="radio" value="4" name="rating" checked={rating === "4"} onChange={this.handleChange}/> 4
                <input type="radio" value="5" name="rating" checked={rating === "5"} onChange={this.handleChange}/> 5
                <br />
                <button id="SubmitButton" type="submit" onClick={this.submit}> Submit! </button>
                {this.state.message !== "" ? <p id="errorMessage"> {this.state.message} </p> : <p></p> }
            </div>
        )
    }

}

export default Add
