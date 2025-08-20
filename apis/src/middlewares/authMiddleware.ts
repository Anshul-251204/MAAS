import { NextFunction, Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import ApiError from "../utils/apiError";
import jwtServices from "../services/jwtServices";
import UserService from "../services/userServices";
import { JWTPayload } from "../types/general";
import HTTP from "../config/http";

const auth = asyncHandler(
  async (req: Request, _: Response, next: NextFunction) => {
    const accessToken = req?.headers.authorization as string;

    if (!accessToken) {
      throw new ApiError(
        "Unauthroized",
        HTTP.statusCode.UNAUTHORIZED,
        HTTP.code.UNAUTHORIZED,
        "accesstoken is required !"
      );
    }

    const decodedToken = jwtServices.verify<JWTPayload>(
      accessToken.split(" ")[1]
    );

    const user = await UserService.getUserById(decodedToken?._id as string);

    if (!user) {
      return next(
        new ApiError(
          "Invail access Token",
          HTTP.statusCode.FORBIDDEN,
          HTTP.code.FORBIDDEN,
          "Issue with jwt token, Please try to loged in again !"
        )
      );
    }

    (req as any).user = user;

    next();
  }
);

export { auth };
