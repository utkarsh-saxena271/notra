import express from 'express'
import authMiddleware from '../middlewares/auth.middleware.js';
import validate from '../middlewares/validate.middleware.js';
import { createNoteSchema, updateNoteSchema } from '../validators/note.validator.js';
import { createNoteController, deleteNoteController, getAllNotesController, getNoteController, updateNoteController } from '../controllers/note.controller.js';

const router = express.Router();



router.post('/note',validate(createNoteSchema), authMiddleware, createNoteController)

router.get('/notes', authMiddleware, getAllNotesController)
router.get('/note/:id', authMiddleware, getNoteController)

router.patch('/note/:id',validate(updateNoteSchema), authMiddleware, updateNoteController)

router.delete('/note/:id', authMiddleware, deleteNoteController)

export default router