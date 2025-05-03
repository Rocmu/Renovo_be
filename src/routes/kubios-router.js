import express from 'express';
import {authenticateToken} from '../middlewares/authentication.js';
import {getDataTen, getDataThirty} from '../controllers/kubios-controller.js';
import { getUserData } from '../controllers/save-hrv-controller.js';

const kubiosRouter = express.Router();

kubiosRouter
  .get('/user-data-ten', authenticateToken, getDataTen)
  .get('/user-data-thirty', authenticateToken, getDataThirty);

kubiosRouter
  .route('/:id')
  .get(authenticateToken, getUserData);

export default kubiosRouter;
