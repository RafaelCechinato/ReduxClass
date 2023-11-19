import { createSlice } from '@reduxjs/toolkit';

const counterInitialState = {
    value: 0
}

export const counterSlice = createSlice({
    name:"counter",
    initialState: counterInitialState,
    reducers: {
        counterIncrement: (state) => {
            state.value += 1;
        },
        counterDecrement: (state) => {
            state.value -= 1;
        },
        counterIncrementByAmount: (state, action) =>{
            state.value += action.payload;
        }
    }
});