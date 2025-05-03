import {
  listAllOthers,
  listOthersByUserId,
  selectOthersById,
  insertOthers,
  updateOthersById,
  deleteOthersById,
} from '../models/others-model.js';
import { validationResult } from 'express-validator';

/**
* Get all others records.
* @async
* @param {Request} req Express request object.
* @param {Response} res Express response object.
* @param {NextFunction} next Next middleware function.
* @return {Promise<Object>} JSON response with others array or error.
*/
const getOthers = async (req, res, next) => {
  try {
    const result = await listAllOthers();
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
* Get all user's others records by user ID.
* @async
* @param {Object} req Express request object (contains params.id).
* @param {Object} res Express response object.
* @param {Function} next Next middleware function.
* @return {Promise<Object>} JSON response with others array or error.
*/
const getOthersByUserId = async (req, res, next) => {
  try {
    const result = await listOthersByUserId(req.params.id);
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
* Get others record by others ID.
* @async
* @param {Object} req Express request object (contains params.id).
* @param {Object} res Express response object.
* @param {Function} next Next middleware function.
* @return {Promise<Object>} JSON response with others object or error.
*/
const getOthersById = async (req, res, next) => {
  try {
    const result = await selectOthersById(req.params.id);
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
* Create new others entry if validation passed.
* @async
* @param {Request} req Express request object (contains body object).
* @param {Response} res Express response object.
* @param {Function} next Next middleware function.
* @return {Promise<Object>} JSON response with success message and ID or error.
*/
const postOthers = async (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const error = new Error('Bad Request');
    error.status = 400;
    error.errors = validationErrors.array();
    return next(error);
  }

  try {
    const result = await insertOthers(req.body);
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
* Update a pre-existing others entry if validation passed.
* @async
* @param {Object} req Express request object (contains params.id and body object).
* @param {Object} res Express response object.
* @param {Function} next Next middleware function.
* @return {Promise<Object>} JSON response with success message or error.
*/
const putOthers = async (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const error = new Error('Bad Request');
    error.status = 400;
    error.errors = validationErrors.array();
    return next(error);
  }

  try {
    const result = await updateOthersById({ ...req.body, others_id: req.params.id });
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
* Delete an existing others entry by ID.
* @async
* @param {Object} req Express request object (contains params.id).
* @param {Object} res Express response object.
* @param {Function} next Next middleware function.
* @return {Promise<Object>} JSON response with success message or error.
*/
const deleteOthers = async (req, res, next) => {
  try {
    const result = await deleteOthersById(req.params.id);
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
  getOthers,
  getOthersByUserId,
  getOthersById,
  postOthers,
  putOthers,
  deleteOthers,
};
