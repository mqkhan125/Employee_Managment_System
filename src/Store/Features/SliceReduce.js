import { createSlice } from "@reduxjs/toolkit";

  const initialState = {
   value: 0,
 };

export const sliceReducer = createSlice({
    name: 'sliceReducer',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }

    }
   
})