import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth-router.js';
import shiftRouter from './routes/shift-router.js';
import disagreementRouter from './routes/disagreement-router.js';
import exerciseRouter from './routes/exercise-router.js';
import sicknessRouter from './routes/sickness-router.js';
import othersRouter from './routes/others-router.js';
import kubiosRouter from './routes/kubios-router.js';

const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use(cors());
app.use('/', express.static('public'));
app.use(express.json());

//ROUTERS

app.use('/api/auth', authRouter);
app.use('/api/shifts', shiftRouter);
app.use('/api/disagreement', disagreementRouter);
app.use('/api/exercise', exerciseRouter);
app.use('/api/sickness', sicknessRouter);
app.use('/api/others', othersRouter);
app.use('/api/kubios', kubiosRouter);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
