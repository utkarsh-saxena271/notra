import type { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler.util.js";
import { createNoteService, deleteNoteService, getAllNotesService, getNoteService, updateNoteService } from "../services/note.service.js";
import ApiResponse from "../utils/apiResponse.util.js";

export const createNoteController = asyncHandler(async(req:Request, res:Response) => {
    const id = Number(req.user.id);
    const note = await createNoteService(req.body, id);

    res.status(201).json(
        new ApiResponse(
            201,
            note,
            'Note created successfully'
        )
    )
})

export const getAllNotesController = asyncHandler(async(req:Request, res:Response) => {
    const id = Number(req.user.id);
    const notes = await getAllNotesService(id)
    res.status(200).json(
        new ApiResponse(
            200,
            notes,
            'Note fetched successfully'
        )
    )
})

export const getNoteController = asyncHandler(async(req:Request, res:Response) => {
    const id = Number(req.user.id)
    const note = await getNoteService(Number(req.params),id);
    res.status(200).json(
        new ApiResponse(
            200,
            note,
            'Note fetched successfully'
        )
    )
})

export const updateNoteController = asyncHandler(async(req:Request, res:Response) => {
    const id = Number(req.user.id)
    const noteId = Number(req.params)
    const note = await updateNoteService(req.body, noteId, id);
    res.status(200).json(
        new ApiResponse(
            200,
            note,
            "Note updated successfully"
        )
    )
})

export const deleteNoteController = asyncHandler(async(req:Request, res:Response) => {
    const id = Number(req.user.id);
    const noteId = Number(req.params);
    const note = await deleteNoteService(noteId, id);
    res.send(200).json(
        new ApiResponse(
            200,
            note,
            "Note deleted Successfully"
        )
    )
})