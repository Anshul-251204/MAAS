import HTTP from '../config/http';
import categoryRepo from '../repositories/categoryRepo';
import categoryServices from '../services/categoryServices';
import CategoryService from '../services/categoryServices';
import ApiResponse from '../utils/apiResponse';
import asyncHandler from '../utils/asyncHandler';
import type { Request, Response } from 'express';

const add = asyncHandler(
  async (
    req: Request<{ storeId: string }, {}, AddCategoryRequestType>,
    res: Response
  ) => {
    const details = req.body;
    const storeId = req.params.storeId;

    const result = await CategoryService.Create(details, storeId);

    return res
      .status(HTTP.statusCode.OK)
      .json(
        new ApiResponse(
          HTTP.statusCode.OK,
          result,
          'Category created successfully.',
          HTTP.code.SUCCESS
        )
      );
  }
);

const get = asyncHandler(
  async (req: Request<{ storeId: string }>, res: Response) => {
    const storeId = req.params?.storeId;
    const result = await categoryServices.getByStoreId(storeId);
    return res
      .status(HTTP.statusCode.OK)
      .json(
        new ApiResponse(
          HTTP.statusCode.OK,
          result,
          'Category fetched successfully.',
          HTTP.code.SUCCESS
        )
      );
  }
);

export const CategoryControllers = {
  add,
  get
};
