import { createSlice } from "@reduxjs/toolkit";

export const darkSlice = createSlice({
    initialState: {
        //dark: false,
        dark: localStorage.getItem("dark") ?? false,
    },
    name: "dark",
    reducers: {
        setdark: (state, action) => {
            localStorage.setItem("dark", action.payload)
            state.dark = action.payload;
        },

    }

}
)


export const { setdark } = darkSlice.actions;
export default darkSlice.reducer