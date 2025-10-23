import { Router } from 'express';
import { upload } from '../middlewares/multerMiddleware';
import { CategoryControllers } from '../controllers';
import { auth, validateRequest } from '../middlewares';
import { requestSchemas } from '../validators';

export const categoryRouter = Router();

categoryRouter
  .route('/:storeId')
  .post(
    auth,
    validateRequest(requestSchemas.CreateCategorySchema),
    CategoryControllers.add
  );

categoryRouter.route('/:storeId').get(CategoryControllers.get);
