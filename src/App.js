import React, { Component , Fragment} from 'react';
import { BrowserRouter  as Router , Route,withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
import './style/App.css';
import CompleteTask from './components/CompleteTask'
import TaskList from './components/TaskList'
import NewTask from './components/NewTask';


const App = ({todolist,dispatch})=>(
  
    <Fragment>
    <div className="">
      <div className="">
        <div className="" >
          <div className="header">
            <h1>Reminders</h1>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col-md-8 col-lg-4">
              <NewTask/>  
              <TaskList/>          
            </div>          
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  
    )


const mapStateToProps = function(state){
  return{
    todolist: state.todolist
  }
}

const AppWithConnect = connect(mapStateToProps)(App)
export default AppWithConnect


// export default App;
