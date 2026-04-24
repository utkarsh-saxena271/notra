const express = require('express')
const router = express.Router();
const {
   createNote, 
    getAllNotes, 
    updateNote, 
    deleteNote, 
    getNote 
} = require('../controllers/notes.controller')

const authMiddleware = require('../middlewares/auth.middleware')


// APIs
// create
router.post('/create',authMiddleware,createNote)
// read
router.get('/',authMiddleware,getAllNotes)
router.get('/:id',authMiddleware, getNote)
// update
router.patch('/:id',authMiddleware, updateNote)
// delete
router.delete('/:id',authMiddleware, deleteNote)



module.exports = router;