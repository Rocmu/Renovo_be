import express from 'express';
import {body} from 'express-validator';
import {postLogin} from '../controllers/kubios-auth-controller.js';
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

export default authRouter;
