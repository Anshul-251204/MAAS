import { Router } from 'express';
import { upload } from '../middlewares/multerMiddleware';
import { FileControllers } from '../controllers';
import { auth } from '../middlewares';

export const fileRouter = Router();

fileRouter.route('').post(upload.single('file'), FileControllers.upload);
fileRouter.route('/:key').delete(auth, FileControllers.deleteFile);
fileRouter
  .route('/multiple')
  .post(auth, upload.any(), FileControllers.uploadMultiple);
