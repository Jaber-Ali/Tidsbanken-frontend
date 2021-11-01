import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  
    
    // userPosted: false,

}
const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {

        initialAddUser: (state, action) => {
            state.userPosted = true;
        },
        resetAddUser: (state, action) => {
            state.userPosted = false;
        }
    }
})
export const {

    initialAddUser,
    resetAddUser
} = userSlice.actions;




export default userSlice.reducer;