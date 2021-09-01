//redux logic
import { createStore } from "redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// const counterReducer = (state = initial, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       view: state.view,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.val,
//       view: state.view,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       view: state.view,
//     };
//   }
//   if (action.type === "toggleCounter") {
//     return {
//       view: !state.view,
//       counter: state.counter,
//     };
//   }
//   return state;
// };
//const store = createStore(counterSlice.reducer);

const store = configureStore({
    reducer:{counter:counterReducer,
        auth: authReducer
    },
});



export default store;
