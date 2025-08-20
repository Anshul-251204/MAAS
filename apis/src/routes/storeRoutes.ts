import { Router } from "express";
import { auth, validateRequest } from "../middlewares";
import { StoreControllers } from "../controllers";
import { requestSchemas } from "../validators";
const storeRouter = Router();

storeRouter
  .route("/")
  .post(
    auth,
    validateRequest(requestSchemas.createStoreSchema),
    StoreControllers.createStore
  );

export { storeRouter };
