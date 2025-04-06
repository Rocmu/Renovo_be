import express from 'express';
import {
  getSicknesses,
  getSicknessesByUserId,
  getSicknessById,
  postSickness,
  putSickness,
  deleteSickness,
} from '../controllers/sickness-controller.js';
import { body } from 'express-validator';
import { errorHandler, validationErrorHandler } from '../middlewares/error-handler.js';
import { authenticateToken } from '../middlewares/authentication.js';

const sicknessRouter = express.Router();

sicknessRouter
  .route('/')
  .get(authenticateToken, getSicknesses, errorHandler)
  .post(
    authenticateToken,
    body('user_id').isInt(),
    body('sickness_date').isDate(),
    body('description').isString().notEmpty(),
    body('impact').isIn(['Low', 'Medium', 'High']),
    body('notes').isString().optional({ nullable: true }),
    validationErrorHandler,
    postSickness,
    errorHandler
  );

sicknessRouter
  .route('/user/:id')
  .get(authenticateToken, getSicknessesByUserId, errorHandler);

sicknessRouter
  .route('/:id')
  .get(authenticateToken, getSicknessById, errorHandler)
  .put(
    authenticateToken,
    body('user_id').isInt(),
    body('sickness_date').isDate(),
    body('description').isString().notEmpty(),
    body('impact').isIn(['Low', 'Medium', 'High']),
    body('notes').isString().optional({ nullable: true }),
    validationErrorHandler,
    putSickness,
    errorHandler
  )
  .delete(authenticateToken, deleteSickness, errorHandler);

export default sicknessRouter;
