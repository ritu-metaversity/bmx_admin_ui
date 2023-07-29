import { createSelector, createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name:"global",
    initialState:{
        data:null
    },
    reducers:{
        setData:(state,action)=>{
            state.data=action.payload
        }
    }
})
export default globalSlice.reducer;

export const {setData}=globalSlice.actions

export const globalSelector=createSelector((state)=>state.global,(state)=>state)