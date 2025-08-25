import { Response, Request } from 'express';
import asyncHandler from '../utils/asyncHandler';
import { requestSchemas } from '../validators';
import productServices from '../services/productServices';
import HTTP from '../config/http';
import ApiResponse from '../utils/apiResponse';

const createProduct = asyncHandler(
  async (
    req: Request<{}, {}, requestSchemas.CreateProductSchemaType>,
    res: Response
  ) => {
    const productDetails = req.body;

    const product = await productServices.createProduct(productDetails);

    res
      .status(HTTP.statusCode.OK)
      .json(
        new ApiResponse(
          HTTP.statusCode.OK,
          product,
          'Product create successfully.',
          HTTP.code.SUCCESS
        )
      );
  }
);

export const ProductControllers = {
  createProduct,
};


