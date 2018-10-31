export const ADD_TASK =(newTask)=> ({
    type:"ADD_TASK",
    newTask
})

export const TOGGLE_TASK = (index)=> ({
    type:"TOGGLE_TASK",
    index
})
export const EDIT_TASK = (index,newTask)=>({
    type:"EDIT_TASK",
    index,
    newTask
})
export const DELETE_TASK = (index)=>({
    type:"DELETE_TASK",
    index
})


// export default({
//     increment
// })
