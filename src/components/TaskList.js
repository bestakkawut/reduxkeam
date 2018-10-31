import React,{Fragment, Component} from "react"
import Todolist from './Todolist'
import CompleteTask from './CompleteTask'

export default class TaskList extends Component{
    render(){
        return(
            <Fragment>
                <div className="wrap-task">
                    <h1 className="head-task">TaskList</h1>
                </div>
                <div>
                    <Todolist/>
                </div>
                <div>                           
                    <CompleteTask/>                
                </div>            
               
            </Fragment>
        );
    }
}