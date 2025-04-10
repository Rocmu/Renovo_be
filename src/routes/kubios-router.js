import express from 'express';
import {authenticateToken} from '../middlewares/authentication.js';
import {getDataTen, getDataThirty} from '../controllers/kubios-controller.js';
import { getUserData } from '../controllers/save-hrv-controller.js';
import { errorHandler} from '../middlewares/error-handler.js';

const kubiosRouter = express.Router();

kubiosRouter
  .get('/user-data-ten', authenticateToken, getDataTen, errorHandler)
  .get('/user-data-thirty', authenticateToken, getDataThirty, errorHandler);

kubiosRouter
  .route('/:id')
  .get(authenticateToken, getUserData, errorHandler);

export default kubiosRouter;
