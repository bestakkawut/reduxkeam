const initialState = {
    todos:[
        {
            title:"test",
            description:"first",
            complete:false
        },
        {
            title:"test2",
            description:"second",
            complete:false
        }
    ]
}

const todolist = ( state = initialState, action)=>{
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                todos: [...state.todos,action.newTask]
            }
            
        case 'EDIT':
            return state
        default:
            return state
    }
}

export default todolist;