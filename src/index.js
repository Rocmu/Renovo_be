import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth-router.js';
import shiftRouter from './routes/shift-router.js';

const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use(cors());
app.use('/', express.static('public'));
app.use(express.json());

//ROUTERS

app.use('/api/auth', authRouter);
app.use('/api/shifts', shiftRouter);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
