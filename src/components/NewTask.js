import React,{Fragment, Component} from "react"
import { connect } from 'react-redux';
import { ADD_TASK } from '../actions'


const NewTask = ({dispatch}) =>(

    <Fragment>
        <div className="wrap-new-form">
            <div className="wrap-new-input">
                <input id="title" className="new-title" type="text" placeholder="Title"/>
                <textarea id="description" className="new-desc" placeholder="Description"></textarea>
                <div style={{textAlign:"right"}}>
                    <button className="btn-style btn-info" onClick={()=>dispatch(ADD_TASK(sendObj()))} >New</button>
                    {/*<button className="btn-style btn-cancle">cancle</button>*/}
                </div>
            </div>
        </div>
    </Fragment>
)

function sendObj(){
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#description").value;
    let today = new Date();
    let date = today.getDay()+"-"+today.getMonth()+"-"+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes()
    let newTask = {title:title,description:description,date:date,time:time,complete:false};
    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
    return newTask
}

const NewTaskWithConnect = connect()(NewTask)

export default NewTaskWithConnect;