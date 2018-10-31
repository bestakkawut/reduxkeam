const initialState = {
    todos:[]
}

const todolist = ( state = initialState, action)=>{
    switch(action.type){
        case 'ADD_TASK':
            return {
                ...state,
                todos: [...state.todos,action.newTask]
            }
            
        case 'TOGGLE_TASK':
            return Object.assign({},state,{
                todos: state.todos.map((todo,index)=>{
                    if(index===action.index){
                        return Object.assign({},state,{
                            title:todo.title,
                            description:todo.description,
                            complete: !todo.complete
                        })
                    }
                    return todo
                })
            })

        case 'EDIT_TASK':
            return Object.assign({},state,{
                todos:state.todos.map((todo,index)=>{
                    if(index===action.index){
                        return Object.assion({},state,{
                            title:action.title,
                            description:action.description,
                            complete:todo.complete
                        })
                    }
                    return todo
                })
            })
        
        case 'DELETE_TASK':
            return { todos: [...state.todos.slice(0,action.index),...state.todos.slice(action.index+1)] }
            
        default:
            return state
    }
}

export default todolist;