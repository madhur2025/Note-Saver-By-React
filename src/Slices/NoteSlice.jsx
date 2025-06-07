import { createSlice } from "@reduxjs/toolkit";
const savedNotes = JSON.parse(localStorage.getItem("notes")) || []

export const NoteSlice = createSlice({
    name:'noteslice',
    initialState:{notes:savedNotes},
    reducers:{
        addNote:(state,action)=>{
            state.notes.push(action.payload)
        },
        deleteNote:(state,action)=>{
            const currNote = action.payload
            state.notes = state.notes.filter((note)=>note.id !== currNote.id)
        }
    }
})
export const {addNote,deleteNote} = NoteSlice.actions
export default NoteSlice.reducer