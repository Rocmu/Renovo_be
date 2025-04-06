import {
  listAllExercises,
  listExercisesByUserId,
  selectExerciseById,
  insertExercise,
  updateExerciseById,
  deleteExerciseById,
} from '../models/exercise-model.js';
import { validationResult } from 'express-validator';

//Get all exercises
const getExercises = async (req, res, next) => {
  try {
    const result = await listAllExercises();
    if (result.error) {
      const error = new Error(result.message);
      error.status = result.error;
      return next(error);
    }
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

//Get all user's exercises by user ID.
const getExercisesByUserId = async (req, res, next) => {
  try {
    const result = await listExercisesByUserId(req.params.id);
    if (result.error) {
      const error = new Error(result.message);
      error.status = result.error;
      return next(error);
    }
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

//Get exercise by ID.
const getExerciseById = async (req, res, next) => {
  try {
    const result = await selectExerciseById(req.params.id);
    if (result.error) {
      const error = new Error(result.message);
      error.status = result.error;
      return next(error);
    }
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

//Create new exercise (validate first).
const postExercise = async (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const error = new Error('Bad Request');
    error.status = 400;
    error.errors = validationErrors.array();
    return next(error);
  }

  try {
    const result = await insertExercise(req.body);
    if (result.error) {
      const error = new Error(result.message);
      error.status = result.error;
      return next(error);
    }
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

//Update existing exercise (validate first).
const putExercise = async (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const error = new Error('Bad Request');
    error.status = 400;
    error.errors = validationErrors.array();
    return next(error);
  }

  try {
    const result = await updateExerciseById({ ...req.body, exercise_id: req.params.id });
    if (result.error) {
      const error = new Error(result.message);
      error.status = result.error;
      return next(error);
    }
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

//Delete exercise by ID.
const deleteExercise = async (req, res, next) => {
  try {
    const result = await deleteExerciseById(req.params.id);
    if (result.error) {
      const error = new Error(result.message);
      error.status = result.error;
      return next(error);
    }
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

export {
  getExercises,
  getExercisesByUserId,
  getExerciseById,
  postExercise,
  putExercise,
  deleteExercise,
};
