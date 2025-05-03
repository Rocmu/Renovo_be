import {
  listAllDisagreements,
  listDisagreementsByUserId,
  selectDisagreementById,
  insertDisagreement,
  updateDisagreementById,
  deleteDisagreementById,
} from '../models/disagreement-model.js';
import { validationResult } from 'express-validator';

/**
* Get all disagreements.
* @async
* @param {Response} res Express response object.
* @param {NextFunction} next Next middleware function.
* @return {Promise<Object>} JSON response with disagreements array or error.
*/
const getDisagreements = async (req, res, next) => {
  try {
    const result = await listAllDisagreements();
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
* Get all user's disagreements by user ID.
* @async
* @param {Object} req Express request object (contains params.id).
* @param {Object} res Express response object.
* @param {Function} next Next middleware function.
* @return {Promise<Object>} JSON response with disagreements array or error.
*/
const getDisagreementsByUserId = async (req, res, next) => {
  try {
    const result = await listDisagreementsByUserId(req.params.id);
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
* Get disagreement by disagreement ID.
* @async
* @param {Object} req Express request object (contains params.id).
* @param {Object} res Express response object.
* @param {Function} next Next middleware function.
* @return {Promise<Object>} JSON response with disagreement object or error.
*/
const getDisagreementById = async (req, res, next) => {
  try {
    const result = await selectDisagreementById(req.params.id);
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
* Create new disagreement if validation passed.
* @async
* @param {Request} req Express request object (contains body object).
* @param {Response} res Express response object.
* @param {Function} next Next middleware function.
* @return {Promise<Object>} JSON response with success message and ID or error.
*/
const postDisagreement = async (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const error = new Error('Bad Request');
    error.status = 400;
    error.errors = validationErrors.array();
    return next(error);
  }

  try {
    const result = await insertDisagreement(req.body);
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
* Update a pre-existing disagreement entry if validation passed.
* @async
* @param {Object} req Express request object (contains params.id and body object).
* @param {Object} res Express response object.
* @param {Function} next Next middleware function.
* @return {Promise<Object>} JSON response with success message or error.
*/
const putDisagreement = async (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const error = new Error('Bad Request');
    error.status = 400;
    error.errors = validationErrors.array();
    return next(error);
  }

  try {
    const result = await updateDisagreementById({ ...req.body, disagreement_id: req.params.id });
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
* Delete an existing disagreement entry by ID.
* @async
* @param {Object} req Express request object (contains params.id).
* @param {Object} res Express response object.
* @param {Function} next Next middleware function.
* @return {Promise<Object>} JSON response with success message or error.
*/
const deleteDisagreement = async (req, res, next) => {
  try {
    const result = await deleteDisagreementById(req.params.id);
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
  getDisagreements,
  getDisagreementsByUserId,
  getDisagreementById,
  postDisagreement,
  putDisagreement,
  deleteDisagreement,
};
