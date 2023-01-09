import { createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'

const initialState=[
    {
        id:"1",
        title:"Task 1",
        description:"Task 1 Description",
        completed:false,
    },
    {
        id:"2",
        title:"Task 2",
        description:"Task 2 Description",
        completed:false,
    }
]

export const taskSlice= createSlice({
    name:'tasks',
    initialState:initialState,
    reducers:{
        addTask:(state,action)=>{
            state.push(action.payload)
            //[...state,action.payload]
        },
        deleteTask:(state,action)=>{
            //console.log("Delete:",action.payload)
            const taskFound = state.find(task => task.id === action.payload)
            console.log(taskFound)
            if(taskFound){
                state.splice(state.indexOf(taskFound),1)
            }
        },
        updateTask:(state,action) =>{
            const {id,title,description}=action.payload
            const taskFound = state.find(task => task.id === id)
            if(taskFound){
                taskFound.title=title,
                taskFound.description=description
            }
        },

    }
})


export const { addTask,deleteTask,updateTask} = taskSlice.actions
export default taskSlice.reducer
