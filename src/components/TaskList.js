import React,{Fragment, Component} from "react"
import Todolist from './Todolist'
import CompleteTask from './CompleteTask'

export default class TaskList extends Component{
    render(){
        return(
            <Fragment>
                <div>
                    <Todolist/>
                </div>      
               
            </Fragment>
        );
    }
}