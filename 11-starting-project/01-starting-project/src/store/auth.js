import { createSlice } from "@reduxjs/toolkit";

const initialAuth = {
    isAuthenticated:false
}
const authSlice = createSlice({
    name:'auth',
    initialState: initialAuth,
    reducers:{
        login(state){
            state.isAuthenticated=true;
        },
        logout(state){
            state.isAuthenticated=false;
        }
    }
});
export const authActions=authSlice.actions;
export default authSlice.reducer;