import React,{Fragment, Component} from "react"
import { connect } from 'react-redux'


const Todolist = ({todolist,dispatch})=>(
    <div>
    {
        todolist.map((todo,index)=>{
            if(!todo.complete){
                return(
                    <li key={index} style={{textDecoration: todo.complete ? "line-through" : "none"}}>
                        <input type="checkbox"/> {todo.title} 
                        <p>{todo.description}</p>
                    </li>
                )
            }
        })
    }        
    </div>
)

const mapStateToProps = function(state){
    return{
      todolist: state.todolist.todos
    }
}
  
  const TodolistWithConnect = connect(mapStateToProps)(Todolist)
  export default TodolistWithConnect