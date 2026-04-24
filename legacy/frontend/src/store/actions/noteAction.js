import instance from "../../config/AxiosConfig";
import { addNote, clearNotes, loadNotes, removeNote, updateNote } from "../reducers/noteSlice";

// Fetch all notes
export const fetchNotes = () => async (dispatch) => {
  try {
    const res = await instance.get("/notes");
    dispatch(loadNotes(res.data?.notes || []));
  } catch (error) {
    dispatch(clearNotes());
    console.error("Error fetching notes:", error.response?.data || error.message);
    throw error;
  }
};

// Create a new note
export const createNote = (data) => async (dispatch, getState) => {
  try {
    const res = await instance.post("/notes/create", data);
    dispatch(addNote(res.data.note));
    return res.data.note;
  } catch (error) {
    console.error("Error creating note:", error.response?.data || error.message);
    throw error;
  }
};

// Update a note
export const changeNote = (id, data) => async (dispatch, getState) => {
    try {
        const res = await instance.patch(`/notes/${id}`, data);
        dispatch(updateNote(res.data.note));
        return res.data.note;
    } catch (error) {
        console.error("Error updating note:", error.response?.data || error.message);
        throw error;
    }
}


// Delete a note
export const deleteNote = (id) => async (dispatch) => {
  try {
    await instance.delete(`/notes/${id}`);
    dispatch(removeNote(id)); 
    return id;
  } catch (error) {
    console.error("Error deleting note:", error.response?.data || error.message);
    throw error;
  }
};
