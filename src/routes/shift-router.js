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
import { validationErrorHandler } from '../middlewares/error-handler.js';
import { authenticateToken } from '../middlewares/authentication.js';

const shiftRouter = express.Router();

shiftRouter
  .route('/')
  .get(authenticateToken, getShifts)
  .post(
    authenticateToken,
    body('user_id').isInt(),
    body('start_date').isDate().optional({ nullable: true }),
    body('start_time').isString().optional({ nullable: true }),
    body('end_time').isString().optional({ nullable: true }),
    body('end_date').isDate().optional({ nullable: true }),
    validationErrorHandler,
    postShift
  );

shiftRouter
  .route('/user/:id')
  .get(authenticateToken, getShiftsByUserId);

shiftRouter
  .route('/:id')
  .get(authenticateToken, getShiftById)
  .put(
    authenticateToken,
    body('user_id').isInt(),
    body('start_date').isDate().optional({ nullable: true }),
    body('start_time').isString().optional({ nullable: true }),
    body('end_time').isString().optional({ nullable: true }),
    body('end_date').isDate().optional({ nullable: true }),
    validationErrorHandler,
    putShift
  )
  .delete(authenticateToken, deleteShift);

export default shiftRouter;
