import {
  listAllDisagreements,
  listDisagreementsByUserId,
  selectDisagreementById,
  insertDisagreement,
  updateDisagreementById,
  deleteDisagreementById,
} from '../models/disagreement-model.js';
import { validationResult } from 'express-validator';

//Get all disagreements.
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

//Get all user's disagreements by user ID.
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

//Get disagreement by ID.
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

//Create new disagreement (validate first).
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

//Update existing disagreement (validate first).
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

//Delete disagreement by ID.
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
