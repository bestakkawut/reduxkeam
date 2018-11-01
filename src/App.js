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
            <div className="accordion"  id="accordionExample">

              <div className="card">
                <div className="card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="headingOne">
                  <h5 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      NewTask
                    </button>
                  </h5>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">
                  <NewTask/>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" id="headingTwo">
                  <h5 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      TaskList
                      
                      <span className="badge badge-secondary" style={{marginLeft:"10px"}}>
                    
                      {  
                        countTask(todolist,"NO_COM")
                      }
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="card-body">
                    <TaskList/>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" id="headingThree">
                  <h5 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      CompleteTask
                      <span className="badge badge-secondary" style={{marginLeft:"10px"}}>
                    
                      {  
                        countTask(todolist,"COM")
                      }
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div className="card-body">
                    <CompleteTask/>
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
