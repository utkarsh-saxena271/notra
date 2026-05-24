import express from 'express'
import validate from '../middlewares/validate.middleware.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import { deleteUserController, getProfileController, updateProfileController } from '../controllers/user.controller.js';
import { updateSchema } from '../validators/users.validator.js';

const router = express.Router();



router.get('/me', authMiddleware, getProfileController)
router.patch('/me', validate(updateSchema), authMiddleware, updateProfileController)
router.delete('/me', authMiddleware, deleteUserController)

export default router;