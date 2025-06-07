import { configureStore } from "@reduxjs/toolkit";
import NoteSlice from "../Slices/NoteSlice";
export const Store = configureStore({
    reducer:{
        notes:NoteSlice,
    }
})