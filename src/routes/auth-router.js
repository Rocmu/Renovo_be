import express from 'express';
import {getMe, postLogin} from '../controllers/kubios-auth-controller.js';
import { authenticateToken } from '../middlewares/authentication.js';

const authRouter = express.Router();

authRouter.post('/kubios-login', postLogin)
authRouter.get('/me', authenticateToken, getMe);


export default authRouter;
