import { configureStore } from "@reduxjs/toolkit";
import TimeTableSlice from "./TimeTableSlice";

const store = configureStore({
    reducer:{
        TimeTable:TimeTableSlice.reducer
    }
})


export default store