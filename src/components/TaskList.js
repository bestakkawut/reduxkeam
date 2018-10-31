import React,{Fragment, Component} from "react"
import Todolist from './Todolist'

export default class TaskList extends Component{
    render(){
        return(
            <Fragment>
                <div>
                <h1>TaskList</h1>
                </div>
                <div>
                <ul>
                {console.log('<tasklist>',this.props.todolist)
                }
                {
                    this.props.todolist.map((todo,index)=>
                        <Todolist key={index} title={todo.title} />
                    )
                }
                </ul>
                </div>

                
            </Fragment>
        );
    }
}