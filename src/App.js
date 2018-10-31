import React, { Component , Fragment} from 'react';
import { connect } from 'react-redux';
import './App.css';
import CompleteTask from './components/CompleteTask'
import TaskList from './components/TaskList'
import NewTask from './components/NewTask';




// const App = ({ message, counters, dispatch}) =>(
//   <div className="container">
//     <div className="columns column is-12">
//       <h1>Message: {message}</h1>
//       <h1>Counter : {counters}</h1>
//     </div>

//     <div className="buttons">
//       <button className="button is-primary" onClick={()=>dispatch({ type:"INCREMENT",score:2 }) }>
//       +1
//       </button>
//       <button className="button is-link" >+2</button>
//       <button className="button is-info">+3</button>
//     </div>

//     <div className="buttons">
//       <button className="button is-primary" onClick={()=>dispatch({type:"DECREMENT",score:1})}>
//       -1
//       </button>
//       <button className="button is-link">-2</button>
//       <button className="button is-info">-3</button>
//     </div>
//   </div>
// )


const App = ({todolist,dispatch})=>(
      <Fragment>
        <div>
          <h1>Reminders</h1>
        </div>
        <CompleteTask/>
        <TaskList todolist={todolist.todos}/>
        <NewTask/>
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
