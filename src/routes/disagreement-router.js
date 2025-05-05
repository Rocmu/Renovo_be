import express from 'express';
import {
  getDisagreements,
  getDisagreementsByUserId,
  getDisagreementById,
  postDisagreement,
  putDisagreement,
  deleteDisagreement,
} from '../controllers/disagreement-controller.js';
import { body } from 'express-validator';
import { validationErrorHandler } from '../middlewares/error-handler.js';
import { authenticateToken } from '../middlewares/authentication.js';

const disagreementRouter = express.Router();

disagreementRouter
  .route('/')
  .get(authenticateToken, getDisagreements)
  .post(
    authenticateToken,
    body('user_id').isInt(),
    body('notes').trim().escape().isString().optional({ nullable: true }),
    validationErrorHandler,
    postDisagreement
  );

disagreementRouter
  .route('/user/:id')
  .get(authenticateToken, getDisagreementsByUserId);

disagreementRouter
  .route('/:id')
  .get(authenticateToken, getDisagreementById)
  .put(
    authenticateToken,
    body('user_id').isInt(),
    body('notes').trim().escape().isString().optional({ nullable: true }),
    validationErrorHandler,
    putDisagreement
  )
  .delete(authenticateToken, deleteDisagreement);

export default disagreementRouter;
