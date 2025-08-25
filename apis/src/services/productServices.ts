import ApiError from '../utils/apiError';
import HTTP from '../config/http';
import type { requestSchemas } from '../validators';
import ProductRepo from '../repositories/productRepo';
import env from '../config/env';
import productRepo from '../repositories/productRepo';
import storeServices from './storeServices';

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

      const product = await productRepo.create({ ...productDetails });

      return product;
    } catch (error) {
      throw new ApiError(
        'Error while create Product',
        HTTP.statusCode.INTERNAL_SERVER_ERROR,
        HTTP.code.SERVER_ERROR,
        ''
      );
    }
  }
}

export default new ProductService();
