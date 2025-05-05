import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth-router.js';
import shiftRouter from './routes/shift-router.js';
import disagreementRouter from './routes/disagreement-router.js';
import exerciseRouter from './routes/exercise-router.js';
import sicknessRouter from './routes/sickness-router.js';
import othersRouter from './routes/others-router.js';
import kubiosRouter from './routes/kubios-router.js';
import path from 'path';
import { fileURLToPath } from 'url';

import { errorHandler, notFoundHandler } from './middlewares/error-handler.js';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.use(cors());
app.use('/', express.static('public'));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SPA fallback
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api', express.static('docs'));

//ROUTERS

app.use('/api/auth', authRouter);
app.use('/api/shifts', shiftRouter);
app.use('/api/disagreement', disagreementRouter);
app.use('/api/exercise', exerciseRouter);
app.use('/api/sickness', sicknessRouter);
app.use('/api/others', othersRouter);
app.use('/api/kubios', kubiosRouter);

//404 virheet
app.use(notFoundHandler);
//yleinen virhe
app.use(errorHandler);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
