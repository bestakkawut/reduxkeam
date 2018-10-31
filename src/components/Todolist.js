import React,{Fragment, Component} from "react"
import { connect } from 'react-redux'
import { TOGGLE_TASK } from '../actions'

let Todolist = ({todolist,dispatch})=>(
    <div>
    {
        todolist.map((todo,index)=>{
            if(!todo.complete){
                return(
                    <li key={index} style={{textDecoration: todo.complete ? "line-through" : "none"}}>
                        <input type="checkbox" onChange={()=>dispatch(TOGGLE_TASK(index))}/> {todo.title} 
                        <p>{todo.description}</p>
                    </li>
                )
            }
        })
    }        
    </div>
)

function completeTask({target}){
    if(target.checked){
        return true;
    }else{
        return false;
    }
}

const mapStateToProps = function(state){
    return{
      todolist: state.todolist.todos
    }
}
  
Todolist = connect(mapStateToProps)(Todolist)
  export default Todolist