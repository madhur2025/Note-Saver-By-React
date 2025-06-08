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
        },
        updateNote:(state,action)=>{
            const updatedNote = action.payload
            const index = state.notes.findIndex((note)=>note.id === updatedNote.id)
            if(index !== -1){
                state.notes[index] = updatedNote
            }
        }
    }
})
export const {addNote,deleteNote,updateNote} = NoteSlice.actions
export default NoteSlice.reducer