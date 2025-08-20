import { requestSchemas } from "../validators";
import asyncHandler from "../utils/asyncHandler";
import { Request, Response } from "express";
import storeServices from "../services/storeServices";
import HTTP from "../config/http";
import ApiResponse from "../utils/apiResponse";

const createStore = asyncHandler(
  async (
    req: Request<{}, {}, requestSchemas.CreateStoreRequestType>,
    res: Response
  ) => {
    const storeDetails = req.body;
    const userId = req.user?._id as string;

    const store = await storeServices.registerStore(storeDetails, userId);

    res
      .status(HTTP.statusCode.OK)
      .json(
        new ApiResponse(
          HTTP.statusCode.OK,
          store,
          "Store created successfully ✅",
          HTTP.code.SUCCESS
        )
      );
  }
);

export const StoreControllers = {
  createStore,
};
