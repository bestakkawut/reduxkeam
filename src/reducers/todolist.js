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
                    console.log(todo)
                    return todo
                })
            })
        default:
            return state
    }
}

export default todolist;