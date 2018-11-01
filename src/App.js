import React, { Component , Fragment} from 'react';
import { BrowserRouter  as Router , Route,withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
import './style/App.css';
import CompleteTask from './components/CompleteTask'
import TaskList from './components/TaskList'
import NewTask from './components/NewTask';

const countTask = (task,type) => {
  let count = 0;
  if(type === "NO_COM"){
    task.map((todo,index)=>{
      if(!todo.complete){
        count++;
      }
    })
  }else
  if(type === "COM"){
    task.map((todo,index)=>{
      if(todo.complete){
        count++;
      }
    })
  }
  
  return count;
}

const App = ({todolist,dispatch})=>(
  
    <Fragment>
          <div className="header">
            <h1>Reminders</h1>
          </div>
          <div className="row">
          <div className="col"></div>
          <div className="col-sm-10 col-md-10 col-lg-6">
            <div className="accordion">

              <div className="card">
                <div className="card-header" data-toggle="collapse" data-target="#collapseNewTask" aria-expanded="true" aria-controls="collapseNewTask" id="headingNewtask">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseNewTask" aria-expanded="true" aria-controls="collapseNewTask">
                      NewTask
                    </button>
                  </h5>
                </div>
                <div id="collapseNewTask" className="collapse show" aria-labelledby="headingNewtask">
                  <div className="card-body">
                  <NewTask/>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" data-toggle="collapse" data-target="#collapseComplete" aria-expanded="true" aria-controls="collapseComplete" id="headingComplete">
                  <h5 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseComplete" aria-expanded="false" aria-controls="collapseComplete">
                      CompleteTask
                      <span className="badge badge-secondary" style={{marginLeft:"10px"}}>
                    
                      {  
                        countTask(todolist,"COM")
                      }
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="collapseComplete" className="collapse" aria-labelledby="headingComplete">
                  <div className="card-body">
                    <CompleteTask/>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="card-header" data-toggle="collapse" data-target="#collapseTask" aria-expanded="false" aria-controls="collapseTask" id="headingTask">
                  <h5 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTask" aria-expanded="false" aria-controls="collapseTask">
                      TaskList
                      
                      <span className="badge badge-secondary" style={{marginLeft:"10px"}}>
                    
                      {  
                        countTask(todolist,"NO_COM")
                      }
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="collapseTask" className="collapse show" aria-labelledby="headingTask">
                  <div className="card-body">
                    <TaskList/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
    </Fragment>
  
    )


const mapStateToProps = function(state){
  return{
    todolist: state.todolist.todos
  }
}

const AppWithConnect = connect(mapStateToProps)(App)
export default AppWithConnect


// export default App;
