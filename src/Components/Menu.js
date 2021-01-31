import React, {Component} from "react";
import Find from "./Find"
import Delete from "./Delete"
import Add from "./Add"
import "../Styles/MenuStyles.css"

class Menu extends Component{

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this)
    }

    state = {
        actualMenuElement: ""

    }



    handleChange(event){
        const {name} = event.target
        this.setState({actualMenuElement: name})
    }




    render(){


        return(
            <div>
                <nav>
                    <ul>
                        <li> <button className="menuElement" name="find" onClick={this.handleChange} > Find Video </button>  </li>
                        <li> <button className="menuElement" name="add" onClick={this.handleChange} > Add Video </button>  </li>
                        <li> <button className="menuElement" name="delete" onClick={this.handleChange}> Delete Video </button> </li>
                    </ul>
                </nav>
                <br />
                {this.state.actualMenuElement === "find" ? <Find /> : <p></p>}
                {this.state.actualMenuElement === "add" ? <Add /> : <p></p>}
                {this.state.actualMenuElement === "delete" ? <Delete /> : <p></p>}
            </div>
        )

    }

}

export default Menu
