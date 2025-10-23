import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import { requestLogger } from './middlewares/requestLogger';
import { storeRouter, userRouter, productRouter, fileRouter } from './routes';
import cors from 'cors';
import { categoryRouter } from './routes/categoryRoutes';
const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

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
app.use('/api/file', fileRouter);
app.use("/api/category",categoryRouter)
export default app;
app.use(errorHandler);
