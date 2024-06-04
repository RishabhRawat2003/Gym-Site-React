import { createSlice } from "@reduxjs/toolkit";

const TimeTableSlice = createSlice({
    name:"TimeTable",
    initialState:[],
    reducers:{
        addArray:(state, action)=>{
            state.length=0

            state.push(...action.payload)
        }
    }
})



export const {addArray} = TimeTableSlice.actions
export default TimeTableSlice