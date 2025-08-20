import { Response, Request, NextFunction } from "express";
import HTTP from "../config/http";
import jwtServices from "../services/jwtServices";
import userServices from "../services/userServices";
import ApiResponse from "../utils/apiResponse";
import asyncHandler from "../utils/asyncHandler";
import { requestSchemas } from "../validators";
import { JWTPayload } from "../types/general";

const userSignin = asyncHandler(async (req: Request, res: Response) => {
  const userDetails = req.body;

  const user = await userServices.register(userDetails);

  const accessToken = await jwtServices.sign({
    _id: user._id,
    email: user.email,
  } as JWTPayload);

  res.status(HTTP.statusCode.OK).json(
    new ApiResponse(
      HTTP.statusCode.OK,
      {
        user: user,
        accessToken: accessToken,
      },
      "User signin successfully ",
      HTTP.code.SUCCESS
    )
  );
});

const userSignup = asyncHandler(
  async (
    req: Request<{}, {}, requestSchemas.LoginUserRequestType>,
    res: Response
  ) => {
    const userDetails = req.body;

    const data = await userServices.login(
      userDetails.email,
      userDetails.password
    );

    res
      .status(HTTP.statusCode.OK)
      .json(
        new ApiResponse(
          HTTP.statusCode.OK,
          data,
          "User signin successfully ",
          HTTP.code.SUCCESS
        )
      );
  }
);

export const AuthControllers = {
  userSignin,
  userSignup,
};
