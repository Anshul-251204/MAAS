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

const getStoreProducts = asyncHandler(async (req: Request, res: Response) => {
  const { storeId } = req.params;

  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const search = (req.query.search as string) || '';
  const sortField = (req.query.sortBy as string) || 'createdAt';
  const sortOrder = req.query.order === 'asc' ? 1 : -1;

  const products = await productServices.getProductByStoreId(
    storeId,
    search,
    page,
    limit,
    sortField,
    sortOrder
  );

  res
    .status(HTTP.statusCode.OK)
    .json(
      new ApiResponse(
        HTTP.statusCode.OK,
        products,
        'Product fetched successfully.',
        HTTP.code.SUCCESS
      )
    );
});

export const ProductControllers = {
  createProduct,
  getStoreProducts,
};
