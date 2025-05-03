import express from 'express';
import {
  getOthers,
  getOthersByUserId,
  getOthersById,
  postOthers,
  putOthers,
  deleteOthers,
} from '../controllers/others-controller.js';
import { body } from 'express-validator';
import { validationErrorHandler } from '../middlewares/error-handler.js';
import { authenticateToken } from '../middlewares/authentication.js';

const othersRouter = express.Router();

othersRouter
  .route('/')
  .get(authenticateToken, getOthers)
  .post(
    authenticateToken,
    body('user_id').isInt(),
    body('others_date').isDate(),
    body('description').trim().escape().isString().notEmpty(),
    body('intensity').isIn(['Low', 'Medium', 'High']),
    body('notes').trim().escape().isString().optional({ nullable: true }),
    validationErrorHandler,
    postOthers
  );

othersRouter
  .route('/user/:id')
  .get(authenticateToken, getOthersByUserId);

othersRouter
  .route('/:id')
  .get(authenticateToken, getOthersById)
  .put(
    authenticateToken,
    body('user_id').isInt(),
    body('others_date').isDate(),
    body('description').trim().escape().isString().notEmpty(),
    body('intensity').isIn(['Low', 'Medium', 'High']),
    body('notes').trim().escape().isString().optional({ nullable: true }),
    validationErrorHandler,
    putOthers
  )
  .delete(authenticateToken, deleteOthers);

export default othersRouter;
