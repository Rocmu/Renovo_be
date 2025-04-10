import express from 'express';
import {getMe, postLogin} from '../controllers/kubios-auth-controller.js';
import { authenticateToken } from '../middlewares/authentication.js';
import { errorHandler} from '../middlewares/error-handler.js';

const authRouter = express.Router();

authRouter.post('/kubios-login', postLogin, errorHandler)
authRouter.get('/me', authenticateToken, getMe, errorHandler);


export default authRouter;
