
import { createSlice } from "@reduxjs/toolkit";
const initialCounter = { counter: 0, view: true };

const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounter,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state,action) {
            state.counter+=action.payload;
        },
        toggleCounter(state) {
            state.view = !state.view;
        }
    }
});
export const counterActions=counterSlice.actions;
export default counterSlice.reducer;