import express from 'express';
import {authenticateToken} from '../middlewares/authentication.js';
import {getDataTen, getDataThirty} from '../controllers/kubios-controller.js';

const kubiosRouter = express.Router();

kubiosRouter
  .get('/user-data-ten', authenticateToken, getDataTen)
  .get('/user-data-thirty', authenticateToken, getDataThirty);

export default kubiosRouter;
