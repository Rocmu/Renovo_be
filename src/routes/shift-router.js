import express from 'express';
import {
  getShifts,
  getShiftsByUserId,
  getShiftById,
  postShift,
  putShift,
  deleteShift,
} from '../controllers/shift-controller.js';
import { body } from 'express-validator';
import { errorHandler, validationErrorHandler } from '../middlewares/error-handler.js';
import { authenticateToken } from '../middlewares/authentication.js';

const shiftRouter = express.Router();

shiftRouter
  .route('/')
  .get(authenticateToken, getShifts, errorHandler)
  .post(
    authenticateToken,
    body('user_id').isInt(),
    body('start_date').isDate().optional({ nullable: true }),
    body('start_time').isString().optional({ nullable: true }),
    body('end_time').isString().optional({ nullable: true }),
    body('end_date').isDate().optional({ nullable: true }),
    validationErrorHandler,
    postShift,
    errorHandler
  );

shiftRouter
  .route('/user/:id')
  .get(authenticateToken, getShiftsByUserId, errorHandler);

shiftRouter
  .route('/:id')
  .get(authenticateToken, getShiftById, errorHandler)
  .put(
    authenticateToken,
    body('user_id').isInt(),
    body('start_date').isDate().optional({ nullable: true }),
    body('start_time').isString().optional({ nullable: true }),
    body('end_time').isString().optional({ nullable: true }),
    body('end_date').isDate().optional({ nullable: true }),
    validationErrorHandler,
    putShift,
    errorHandler
  )
  .delete(authenticateToken, deleteShift, errorHandler);

export default shiftRouter;
