const initialState = {
    todos:[
        {
            title:"test",
            description:"first",
            complete:true
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
            
        case 'Complete':
            return {
                ...state,
                todos: [...state.todos,action.newTask]
            }
        default:
            return state
    }
}

export default todolist;