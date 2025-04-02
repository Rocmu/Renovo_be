import {
  listAllShifts,
  listShiftsByUserId,
  selectShiftById,
  insertShift,
  updateShiftById,
  deleteShiftById,
} from '../models/shift-model.js';
import { validationResult } from 'express-validator';

/**
 * Get all shifts (uses listAllShifts model).
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 * @returns {Promise<Object>} JSON response with shifts array or error.
 */
const getShifts = async (req, res, next) => {
  try {
    const result = await listAllShifts();
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
 * Get all users shifts by user ID.
 * @param {Object} req - Express request object (contains params.id).
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 * @returns {Promise<Object>} JSON response with shifts array or error.
 */
const getShiftsByUserId = async (req, res, next) => {
  try {
    const result = await listShiftsByUserId(req.params.id);
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
 * Get shift by ID.
 * @param {Object} req - Express request object (contains params.id).
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 * @returns {Promise<Object>} JSON response with shift object or error.
 */
const getShiftById = async (req, res, next) => {
  try {
    const result = await selectShiftById(req.params.id);
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
 * Create new shift (validate first).
 * @param {Object} req - Express request object (contains body object).
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 * @returns {Promise<Object>} JSON response with success message and ID or error.
 */
const postShift = async (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const error = new Error('Bad Request');
    error.status = 400;
    error.errors = validationErrors.array();
    return next(error);
  }

  try {
    const result = await insertShift(req.body);
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
 * Update existing shift (validate first).
 * @param {Object} req - Express request object (contains params.id and body object).
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 * @returns {Promise<Object>} JSON response with success message or error.
 */
const putShift = async (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const error = new Error('Bad Request');
    error.status = 400;
    error.errors = validationErrors.array();
    return next(error);
  }

  try {
    const result = await updateShiftById({ ...req.body, shift_id: req.params.id });
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
 * Delete shift by ID.
 * @param {Object} req - Express request object (contains params.id).
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 * @returns {Promise<Object>} JSON response with success message or error.
 */
const deleteShift = async (req, res, next) => {
  try {
    const result = await deleteShiftById(req.params.id);
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
  getShifts,
  getShiftsByUserId,
  getShiftById,
  postShift,
  putShift,
  deleteShift,
};
