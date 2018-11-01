import React,{Fragment, Component} from "react"
import { connect } from 'react-redux'
import { TOGGLE_TASK,DELETE_TASK,EDIT_TASK } from '../actions'

let Todolist = ({todolist,dispatch})=>(
    <div className="wrap-new-input">
    <ul className="task-style">
        {            
            todolist.map((todo,index,arr)=>{
                if(arr.length-1 < 0){
                    return (
                        <h1>no have list</h1>
                    )
                }else
                if(!todo.complete){
                    return(
                        <li key={index} className="list-style">
                            <input type="checkbox" className="list-input" onChange={()=>dispatch(TOGGLE_TASK(index))}/>
                            <span style={{fontWeight:"600"}}>{index+1}.</span>
                            <input id={"title"+index} className="title-style" type="text" placeholder={todo.title}/>    
                            <p className="date-style">Date : {todo.date+"  "+todo.time}</p>         
                            {/*<span className="title-style">{todo.title}</span> */}
                            <div style={{padding:"0px 20px 0 30px"}}>
                                <textarea id={"description"+index} className="desc-style">{todo.description}</textarea>
                            </div>
                            <div style={{textAlign:"right",paddingRight:"15px"}}>
                                <button className="btn-style btn-danger" onClick={()=>dispatch(DELETE_TASK(index))}>delete</button>
                                <button className="btn-style btn-info" onClick={()=>dispatch(EDIT_TASK(index,sendObjEdit(index)))}>edit</button>
                            </div>
                        </li>
                    )
                }
            })
        } 
    </ul>       
    </div>
)

function sendObjEdit(index){
    let title = document.querySelector("#title"+index).value;
    if(title===""){
        title = document.querySelector("#title"+index).placeholder;
    }
    let description = document.querySelector("#description"+index).value;
    let newTask = {title:title,description:description,complete:false};
    // document.querySelector("#title"+index).value = "";
    // document.querySelector("#description"+index).value = "";
    return newTask
}

const mapStateToProps = function(state){
    return{
      todolist: state.todolist.todos
    }
}
  
Todolist = connect(mapStateToProps)(Todolist)
  export default Todolist