import express from 'express'

const router = express.Router();



router.get('/me')
router.patch('/me')
router.delete('/me')

export default router;