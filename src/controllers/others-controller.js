import {
  listAllOthers,
  listOthersByUserId,
  selectOthersById,
  insertOthers,
  updateOthersById,
  deleteOthersById,
} from '../models/others-model.js';
import { validationResult } from 'express-validator';

//Get all others records (uses listAllOthers model).
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

//Get all user's others records by user ID.
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

//Get others record by ID.
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

//Create new others record (validate first).
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

//Update existing others record (validate first).
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

//Delete others record by ID.
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
