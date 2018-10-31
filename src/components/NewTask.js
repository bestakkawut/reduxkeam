import React,{Fragment, Component} from "react"
import { connect } from 'react-redux';
import { ADD_TASK } from '../actions'


const NewTask = ({dispatch}) =>(

    <Fragment>
        <div>
            <h1>NewTask</h1>
        </div>
        <div>
            <input id="title" type="text" placeholder="Title"/>
            <br></br>
            <textarea id="description" placeholder="description"></textarea>
            <button onClick={()=>dispatch(ADD_TASK(sendObj()))} >complete</button>
            <button>cancle</button>
        </div>
    </Fragment>
)

function sendObj(){
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#description").value;
    let newTask = {title:title,description:description,complete:false};
    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
    return newTask
}

const NewTaskWithConnect = connect()(NewTask)

export default NewTaskWithConnect;