import {
  listAllSicknesses,
  listSicknessesByUserId,
  selectSicknessById,
  insertSickness,
  updateSicknessById,
  deleteSicknessById,
} from '../models/sickness-model.js';
import { validationResult } from 'express-validator';

/**
 * Get all sickness entries.
 * @param {Request} req Express request object.
 * @param {Response} res Express response object.
 * @param {NextFunction} next Next middleware function.
 * @return {Promise<Object>} JSON response with sickness array or error.
 */
const getSicknesses = async (req, res, next) => {
  try {
    const result = await listAllSicknesses();
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
 * Get all user's sickness entries by user ID.
 * @param {Object} req Express request object (contains params.id).
 * @param {Object} res Express response object.
 * @param {Function} next Next middleware function.
 * @return {Promise<Object>} JSON response with sickness array or error.
 */
const getSicknessesByUserId = async (req, res, next) => {
  try {
    const result = await listSicknessesByUserId(req.params.id);
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
 * Get sickness entry by sickness ID.
 * @param {Object} req Express request object (contains params.id).
 * @param {Object} res Express response object.
 * @param {Function} next Next middleware function.
 * @return {Promise<Object>} JSON response with sickness object or error.
 */
const getSicknessById = async (req, res, next) => {
  try {
    const result = await selectSicknessById(req.params.id);
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
 * Create new sickness entry if validation passed.
 * @param {Request} req Express request object (contains body object).
 * @param {Response} res Express response object.
 * @param {Function} next Next middleware function.
 * @return {Promise<Object>} JSON response with success message and ID or error.
 */
const postSickness = async (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const error = new Error('Bad Request');
    error.status = 400;
    error.errors = validationErrors.array();
    return next(error);
  }

  try {
    const result = await insertSickness(req.body);
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
 * Update an existing sickness entry if validation passed.
 * @param {Object} req Express request object (contains params.id and body object).
 * @param {Object} res Express response object.
 * @param {Function} next Next middleware function.
 * @return {Promise<Object>} JSON response with success message or error.
 */
const putSickness = async (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const error = new Error('Bad Request');
    error.status = 400;
    error.errors = validationErrors.array();
    return next(error);
  }

  try {
    const result = await updateSicknessById({ ...req.body, sickness_id: req.params.id });
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
 * Delete an existing sickness entry by ID.
 * @param {Object} req Express request object (contains params.id).
 * @param {Object} res Express response object.
 * @param {Function} next Next middleware function.
 * @return {Promise<Object>} JSON response with success message or error.
 */
const deleteSickness = async (req, res, next) => {
  try {
    const result = await deleteSicknessById(req.params.id);
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
  getSicknesses,
  getSicknessesByUserId,
  getSicknessById,
  postSickness,
  putSickness,
  deleteSickness,
};
