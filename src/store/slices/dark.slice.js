import { createSlice } from "@reduxjs/toolkit";

export const darkSlice = createSlice({
    initialState: {
        dark: false,
        // darkMode: localStorage.getItem("darkMode") ?? "",
    },
    name: "dark",
    reducers: {
        setdark: (state, action) => {
            state.dark = action.payload;
        },

    }

}
)


export const { setdark } = darkSlice.actions;
export default darkSlice.reducer