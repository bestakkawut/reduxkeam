import React,{Fragment, Component} from "react"


export default class Todolist extends Component{
    render(){

        return(
            // <Fragment>
                <li key={this.props.id} style={{textDecoration:"line-through"}}><input type="checkbox"/> {this.props.title} </li>
            // </Fragment>
        );
    }
}