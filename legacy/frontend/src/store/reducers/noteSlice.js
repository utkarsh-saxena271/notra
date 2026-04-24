import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    note : []
}


const noteSlice = createSlice({
    name:"note",
    initialState,
    reducers:{
        loadNotes : (state , action)=>{
            state.note = action.payload
        },
        removeNote : (state , action)=>{
            state.note = state.note.filter(note => note._id !== action.payload)
        },
        addNote: (state, action) => {
            state.note.push(action.payload); 
        },
        clearNotes: (state) => {
            state.note = []; 
        },
        updateNote: (state, action) => {
            const updated = action.payload
            state.note = state.note.map(note =>
                note._id === updated._id ? updated : note
            )
        }
    }
})

export const { loadNotes, removeNote, addNote, clearNotes, updateNote } = noteSlice.actions
export default noteSlice.reducer;
