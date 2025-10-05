import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import { requestLogger } from './middlewares/requestLogger';
import { storeRouter, userRouter, productRouter, fileRouter } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.get('/', (req, res) => {
  console.log(req.host.split('.')[0]);
  res.send('working fine ');
});

app.use('/auth', userRouter);
app.use('/api/store', storeRouter);
app.use('/api/product', productRouter);
app.use("/api/file",fileRouter);
export default app;
app.use(errorHandler);
