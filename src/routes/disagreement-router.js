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
import { errorHandler, validationErrorHandler } from '../middlewares/error-handler.js';
import { authenticateToken } from '../middlewares/authentication.js';

const disagreementRouter = express.Router();

disagreementRouter
  .route('/')
  .get(authenticateToken, getDisagreements, errorHandler)
  .post(
    authenticateToken,
    body('user_id').isInt(),
    body('notes').isString().optional({ nullable: true }),
    validationErrorHandler,
    postDisagreement,
    errorHandler
  );

disagreementRouter
  .route('/user/:id')
  .get(authenticateToken, getDisagreementsByUserId, errorHandler);

disagreementRouter
  .route('/:id')
  .get(authenticateToken, getDisagreementById, errorHandler)
  .put(
    authenticateToken,
    body('user_id').isInt(),
    body('notes').isString().optional({ nullable: true }),
    validationErrorHandler,
    putDisagreement,
    errorHandler
  )
  .delete(authenticateToken, deleteDisagreement, errorHandler);

export default disagreementRouter;
