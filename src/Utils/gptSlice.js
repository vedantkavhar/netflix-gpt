import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch : false ,
    },
    reducers: {
        toggleViewSearch: (state)=>{
            state.showGptSearch= !state.showGptSearch;
        }
    }, 
})


export const { toggleViewSearch }= gptSlice.actions;
export default gptSlice.reducer;