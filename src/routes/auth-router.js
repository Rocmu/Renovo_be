import express from 'express';
import {body} from 'express-validator';
import {getMe, postLogin} from '../controllers/kubios-auth-controller.js';
import { authenticateToken } from '../middlewares/authentication.js';
import { validationErrorHandler} from '../middlewares/error-handler.js';

const authRouter = express.Router();

authRouter
  .route('/kubios-login')
  .post(
    body('username').trim().escape().isEmail(),
    body('password').trim().escape().isLength({min: 1, max: 120}),
    validationErrorHandler,
    postLogin
  )
authRouter.get('/me', authenticateToken, getMe);


export default authRouter;
