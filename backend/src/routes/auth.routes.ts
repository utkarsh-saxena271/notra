import express from 'express';
import validate from '../middlewares/validate.middleware.js';
import { loginController, logoutController, registerController } from '../controllers/auth.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import { loginSchema, registerSchema } from '../validators/auth.validatos.js';
const router = express.Router();

router.post('/register', validate(registerSchema), registerController);
router.post('/login', validate(loginSchema), loginController);
router.post('/logout',authMiddleware, logoutController)

export default router;