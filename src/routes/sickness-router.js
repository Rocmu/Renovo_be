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
import { validationErrorHandler } from '../middlewares/error-handler.js';
import { authenticateToken } from '../middlewares/authentication.js';

const sicknessRouter = express.Router();

sicknessRouter
  .route('/')
  .get(authenticateToken, getSicknesses)
  .post(
    authenticateToken,
    body('user_id').isInt(),
    body('sickness_date').isDate(),
    body('description').trim().escape().isString().notEmpty(),
    body('impact').isIn(['Low', 'Medium', 'High']),
    body('notes').trim().escape().isString().optional({ nullable: true }),
    validationErrorHandler,
    postSickness
  );

sicknessRouter
  .route('/user/:id')
  .get(authenticateToken, getSicknessesByUserId);

sicknessRouter
  .route('/:id')
  .get(authenticateToken, getSicknessById)
  .put(
    authenticateToken,
    body('user_id').isInt(),
    body('sickness_date').isDate(),
    body('description').trim().escape().isString().notEmpty(),
    body('impact').isIn(['Low', 'Medium', 'High']),
    body('notes').trim().escape().isString().optional({ nullable: true }),
    validationErrorHandler,
    putSickness
  )
  .delete(authenticateToken, deleteSickness);

export default sicknessRouter;
