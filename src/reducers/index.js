import { combineReducers } from 'redux'
import counters from './counters'
import todolist from './todolist'
// import actions from './actions'

export default combineReducers({
    counters,
    todolist
    // actions
})

/*
{
    id:,
    title:,
    description:,
    date:,
    status:{
        checked:false
    }
}

*/