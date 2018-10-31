import React,{Fragment, Component} from "react"
import { connect } from "react-redux"
import { TOGGLE_TASK } from "../actions"

const CompleteTask = ({todolist,dispatch}) => (
    <Fragment>
    <h1>Complete</h1>
    <ul>
        {
            todolist.map((todo,index)=>{
                if(todo.complete){
                    return( <li key={index} style={{textDecoration: "line-through"}}>
                                <input type="checkbox" onChange={()=>dispatch(TOGGLE_TASK(index))} defaultChecked/> {todo.title} 
                                <p>{todo.description}</p>
                            </li> 
                    )
                }
            })
        }
    </ul>
    </Fragment>
)

const mapStateToProps = (state) =>{
    return{
        todolist:state.todolist.todos
    }
}

const CompleteWithConnect = connect(mapStateToProps)(CompleteTask)

export default CompleteWithConnect;
