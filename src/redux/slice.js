import { createSlice } from "@reduxjs/toolkit";


  const initialState = {
        items: localStorage.getItem("fat")?JSON.parse(localStorage.getItem("fat")):[]}
    
const fatchSlice = createSlice ({
    name :"fat",
    initialState,
    reducers:{
        addItem :(state,action)=>{
            console.log(action.payload)
                state.items.push(action.payload)
                localStorage.setItem("fat",JSON.stringify(state.items))
        },

        recItem :(state,action)=>{
        state.items = state.items.filter(
            (item)=>item.id !== action.payload
        )
        },
        alrecItem :(state)=>{
            state.value = 0
        }
    }
})

export const { addItem,recItem,alrecItem} =fatchSlice.actions
export default fatchSlice.reducer

