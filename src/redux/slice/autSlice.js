import { createSlice } from "@reduxjs/toolkit";

const autSlice = createSlice({
    name: "autSlice",
    initialState: {
        user: null,
        idToken: null,
    },

    reducers:{
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setIdToken: (state, action) => {
            state.idToken = action.payload;
        },
        clearUser: (state) => {
            state.user = ''
        },
    },
});

export const { setIdToken, setUser, clearUser } = autSlice.actions;

export default autSlice.reducer;