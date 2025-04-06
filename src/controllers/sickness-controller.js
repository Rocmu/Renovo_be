import {
  listAllSicknesses,
  listSicknessesByUserId,
  selectSicknessById,
  insertSickness,
  updateSicknessById,
  deleteSicknessById,
} from '../models/sickness-model.js';
import { validationResult } from 'express-validator';

//Get all sickness records (uses listAllSicknesses model).
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

//Get all user's sickness records by user ID.
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

//Get sickness record by ID.
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

//Create new sickness record (validate first).
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

//Update existing sickness record (validate first).
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

//Delete sickness record by ID.
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
