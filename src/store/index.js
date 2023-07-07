import { configureStore } from "@reduxjs/toolkit";
//import nameTrainer from "./slices/dark.slice";
import darkSlice from "./slices/dark.slice";

export default configureStore({
    reducer: {
        //aqui van todos nuestros estados globales, slices
        //nameTrainer
        darkSlice
    }
})