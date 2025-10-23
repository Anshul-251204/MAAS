import { requestSchemas } from '../validators';
import asyncHandler from '../utils/asyncHandler';
import { NextFunction, Request, Response } from 'express';
import StoreServices from '../services/storeServices';
import HTTP from '../config/http';
import ApiResponse from '../utils/apiResponse';

const createStore = asyncHandler(
  async (
    req: Request<{}, {}, requestSchemas.CreateStoreRequestType>,
    res: Response
  ) => {
    const storeDetails = req.body;
    const userId = req.user?._id as string;

    const store = await StoreServices.registerStore(storeDetails, userId);

    res
      .status(HTTP.statusCode.OK)
      .json(
        new ApiResponse(
          HTTP.statusCode.OK,
          store,
          'Store created successfully ✅',
          HTTP.code.SUCCESS
        )
      );
  }
);

const addThemeConfig = asyncHandler(
  async (
    req: Request<{}, {}, requestSchemas.CreateThemeSchemaType>,
    res: Response,
    next: NextFunction
  ) => {
    const result = await StoreServices.AddThemeConfig(req.body);

    res
      .status(HTTP.statusCode.CREATED)
      .json(
        new ApiResponse(
          HTTP.statusCode.CREATED,
          result,
          'Theme created successfully ✅',
          HTTP.code.CREATED
        )
      );
  }
);

const getStoreDetails = asyncHandler(
  async (req: Request<{ domain: string }>, res: Response) => {
    const { domain } = req.params;

    const result = await StoreServices.getStoreDetailsByDomain(domain);

    res
      .status(HTTP.statusCode.CREATED)
      .json(
        new ApiResponse(
          HTTP.statusCode.OK,
          result,
          'Store details fetched successfully ✅',
          HTTP.code.SUCCESS
        )
      );
  }
);

const getStoreDetailsByUser = asyncHandler(
  async (req: Request<{ userId: string }>, res: Response) => {
    const { userId } = req.params;

    const result = await StoreServices.getByUserId(userId);

    res
      .status(HTTP.statusCode.CREATED)
      .json(
        new ApiResponse(
          HTTP.statusCode.OK,
          result,
          'Store details fetched successfully ✅',
          HTTP.code.SUCCESS
        )
      );
  }
);

export const StoreControllers = {
  createStore,
  addThemeConfig,
  getStoreDetails,
  getStoreDetailsByUser,
};
