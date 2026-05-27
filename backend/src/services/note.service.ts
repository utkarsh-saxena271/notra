import { and, eq } from "drizzle-orm";
import { db } from "../db/db.js"
import { notes } from "../db/schema/note.schema.js"
import APIError from "../utils/apiError.util.js";

interface Data {
    title : string,
    description? : string
}
interface UpdateData {
    title? : string,
    description? : string
}

export const createNoteService = async(data : Data, id : number) => {
    if (!data.title || !data.description) {
    throw new APIError(400, 'Title and description are required');
}
    const note = await db.insert(notes).values({
        title : data.title,
        description : data.description,
        authorId : id
    }).returning();

    if(note.length === 0){
        throw new APIError(400, 'Note not created');
    }
    return note[0];
}

export const getAllNotesService = async(id:number) => {
    const allNotes = await db.select().from(notes).where(eq(notes.authorId, id));
    if(allNotes.length === 0){
        throw new APIError(404, 'No notes found');
    }
    return allNotes;
}

export const getNoteService = async(data:number, id:number) => {
    const note = await db.select().from(notes).where(and(eq(notes.id,data), eq(notes.authorId,id)));
    if(note.length === 0){
        throw new APIError(400, "Note doesn't exist")
    }
    return note[0];
}

export const updateNoteService = async(data : UpdateData, noteId:number, id:number) => {
    const note = await db.update(notes).set(data).where(and(eq(notes.id,noteId), eq(notes.authorId, id))).returning();
    if(note.length === 0){
        throw new APIError(400, "Note not updated")
    }
    return note[0];
}

export const deleteNoteService = async(noteId : number, id : number) => {
    const note = await db.delete(notes).where(and(eq(notes.id, noteId), eq(notes.authorId, id))).returning();
    if(note.length === 0){
        throw new APIError(400, "Note not deleted")
    }
    return note[0]
}

