import express from 'express';
import {
  getExercises,
  getExercisesByUserId,
  getExerciseById,
  postExercise,
  putExercise,
  deleteExercise,
} from '../controllers/exercise-controller.js';
import { body } from 'express-validator';
import { validationErrorHandler } from '../middlewares/error-handler.js';
import { authenticateToken } from '../middlewares/authentication.js';

const exerciseRouter = express.Router();

exerciseRouter
  .route('/')
  .get(authenticateToken, getExercises)
  .post(
    authenticateToken,
    body('user_id').isInt(),
    body('exercise_date').isDate(),
    body('exercise_type').trim().escape().isString().notEmpty(),
    body('start_time').trim().escape().isString().notEmpty(),
    body('end_time').trim().escape().isString().notEmpty(),
    body('level').isIn(['Low', 'Medium', 'High']),
    body('notes').trim().escape().isString().optional({ nullable: true }),
    validationErrorHandler,
    postExercise
  );

exerciseRouter
  .route('/user/:id')
  .get(authenticateToken, getExercisesByUserId);

exerciseRouter
  .route('/:id')
  .get(authenticateToken, getExerciseById)
  .put(
    authenticateToken,
    body('user_id').isInt(),
    body('exercise_date').isDate(),
    body('exercise_type').trim().escape().isString().notEmpty(),
    body('start_time').trim().escape().isString().notEmpty(),
    body('end_time').trim().escape().isString().notEmpty(),
    body('level').isIn(['Low', 'Medium', 'High']),
    body('notes').trim().escape().isString().optional({ nullable: true }),
    validationErrorHandler,
    putExercise
  )
  .delete(authenticateToken, deleteExercise);

export default exerciseRouter;
