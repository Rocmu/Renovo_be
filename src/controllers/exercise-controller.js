import {
  listAllExercises,
  listExercisesByUserId,
  selectExerciseById,
  insertExercise,
  updateExerciseById,
  deleteExerciseById,
} from '../models/exercise-model.js';
import { validationResult } from 'express-validator';

/**
* Get all exercises.
* @async
* @param {Request} req Express request object.
* @param {Response} res Express response object.
* @param {NextFunction} next Next middleware function.
* @return {Promise<Object>} JSON response with exercises array or error.
*/
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

/**
* Get all user's exercises by user ID.
* @async
* @param {Object} req Express request object (contains params.id).
* @param {Object} res Express response object.
* @param {Function} next Next middleware function.
* @return {Promise<Object>} JSON response with exercises array or error.
*/
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

/**
* Get exercise by exercise ID.
* @async
* @param {Object} req Express request object (contains params.id).
* @param {Object} res Express response object.
* @param {Function} next Next middleware function.
* @return {Promise<Object>} JSON response with exercise object or error.
*/
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

/**
* Create new exercise if validation passed.
* @async
* @param {Request} req Express request object (contains body object).
* @param {Response} res Express response object.
* @param {Function} next Next middleware function.
* @return {Promise<Object>} JSON response with success message and ID or error.
*/
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

/**
* Update a pre-existing exercise entry if validation passed.
* @async
* @param {Object} req Express request object (contains params.id and body object).
* @param {Object} res Express response object.
* @param {Function} next Next middleware function.
* @return {Promise<Object>} JSON response with success message or error.
*/
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

/**
* Delete an existing exercise entry by ID.
* @async
* @param {Object} req Express request object (contains params.id).
* @param {Object} res Express response object.
* @param {Function} next Next middleware function.
* @return {Promise<Object>} JSON response with success message or error.
*/
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
