import express from 'express';
import validate from '../middlewares/validate.middleware.js';
import { loginController, registerController } from '../controllers/auth.controller.js';
const router = express.Router();

router.post('/register', validate, registerController);
router.post('/login', validate, loginController);
router.post('/logout')


// router.get('/me')

// router.patch('/me')

// router.delete('/me')


export default router;