import ApiError from '../utils/apiError';
import HTTP from '../config/http';
import type { requestSchemas } from '../validators';
import ProductRepo from '../repositories/productRepo';
import env from '../config/env';
import productRepo from '../repositories/productRepo';
import storeServices from './storeServices';
import { unknown } from 'zod';
import { AnySoaRecord } from 'dns';

export class ProductService {
  async createProduct(productDetails: requestSchemas.CreateProductSchemaType) {
    try {
      const store = storeServices.getById(productDetails.storeId as string);

      if (!store) {
        throw new ApiError(
          'Store not exist with this storeId !',
          HTTP.statusCode.BAD_REQUEST,
          HTTP.code.BAD_REQUEST,
          'Store not exist with this store id in db please enter a real store id'
        );
      }

      console.dir(productDetails);

      const product = await productRepo.create({ ...productDetails });

      return product;
    } catch (error: any) {
      console.log(error);
      throw new ApiError(
        error._message ? error._message : 'Error while create Product',
        HTTP.statusCode.INTERNAL_SERVER_ERROR,
        HTTP.code.SERVER_ERROR,
        ''
      );
    }
  }

  async getProductByStoreId(
    storeId: string,
    search: string,
    page: number,
    limit: number,
    sortField: string,
    sortOrder: 1 | -1
  ) {
    try {
      return ProductRepo.findByStoreId(
        storeId,
        search,
        page,
        limit,
        sortField,
        sortOrder
      );
    } catch (error: any) {
      throw new ApiError(
        error._message
          ? error._message
          : error.message
            ? error.message
            : 'Error while create Product',
        HTTP.statusCode.INTERNAL_SERVER_ERROR,
        HTTP.code.SERVER_ERROR,
        ''
      );
    }
  }
}

export default new ProductService();
