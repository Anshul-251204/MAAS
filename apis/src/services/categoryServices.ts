import ApiError from '../utils/apiError';
import HTTP from '../config/http';
import type { requestSchemas } from '../validators';
import storeServices from './storeServices';
import CategoryRepo from '../repositories/categoryRepo';

export class CategoryService {
  async Create(
    categoryDetails: requestSchemas.CreateCategoryType,
    storeId: string
  ) {
    try {
      console.log(categoryDetails, storeId);
      const store = storeServices.getById(storeId as string);

      if (!store) {
        throw new ApiError(
          'Store not exist with this storeId !',
          HTTP.statusCode.BAD_REQUEST,
          HTTP.code.BAD_REQUEST,
          'Store not exist with this store id in db please enter a real store id'
        );
      }

      const categoryDto = {
        name: categoryDetails.name,
        description: categoryDetails.description,
        media: {
          key: categoryDetails.media.key,
          url: categoryDetails.media.url,
        },
        storeId: storeId,
      };

      const category = await CategoryRepo.create(categoryDto);

      return category;
    } catch (error) {
      throw new ApiError(
        'Error while create Category',
        HTTP.statusCode.INTERNAL_SERVER_ERROR,
        HTTP.code.SERVER_ERROR,
        ''
      );
    }
  }
  async getByStoreId(storeId: string) {
    try {
      const result = await CategoryRepo.findByStoreId(storeId);
      return result;
    } catch (error) {
      throw new ApiError(
        'Error while Fetching Category',
        HTTP.statusCode.INTERNAL_SERVER_ERROR,
        HTTP.code.SERVER_ERROR,
        ''
      );
    }
  }
}

export default new CategoryService();
