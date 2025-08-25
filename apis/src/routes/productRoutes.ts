import { Router } from 'express';
import { auth, validateRequest } from '../middlewares';
import { ProductControllers } from '../controllers';
import { requestSchemas } from '../validators';

export const productRouter = Router();

productRouter
  .route('')
  .post(
    auth,
    validateRequest(requestSchemas.createProductSchema),
    ProductControllers.createProduct
  );
