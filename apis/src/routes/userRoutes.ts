import { Router } from "express";
import { validateRequest } from "../middlewares";
import { AuthControllers } from "../controllers";
import { requestSchemas } from "../validators";

export const userRouter = Router();

userRouter
  .route("/signup")
  .post(
    validateRequest(requestSchemas.createUserSchema),
    AuthControllers.userSignin
  );

userRouter
  .route("/signin")
  .post(
    validateRequest(requestSchemas.LoginUserSchema),
    AuthControllers.userSignup
  );
