import ApiError from '../utils/apiError';
import HTTP from '../config/http';
import type { requestSchemas } from '../validators';
import storeRepo from '../repositories/storeRepo';
import env from '../config/env';

export class UserService {
  async registerStore(
    storeDetails: requestSchemas.CreateStoreRequestType,
    userId: string
  ) {
    if (!storeDetails?.domain) {
      storeDetails.domain = `${storeDetails.name}.${env.get(
        'FRONTEND_DOMAIN'
      )}`;
    }
    if (!storeDetails?.customDomain) {
      storeDetails.customDomain = '';
    }

    const storeExist = await storeRepo.findByDomain(
      storeDetails.domain!,
      storeDetails.customDomain!
    );

    console.log(storeExist);
    if (storeExist) {
      throw new ApiError(
        'Store already exists with this domain or custom domin',
        HTTP.statusCode.BAD_REQUEST,
        HTTP.code.BAD_REQUEST,
        'store already exist with domain please try with another one 🙂'
      );
    }

    const store = await storeRepo.create({ ...storeDetails, userId: userId });

    return store;
  }

  async getByDomin(domin: string) {
    return await storeRepo.findByDomain(domin);
  }
  async getById(id: string) {
    return await storeRepo.findById(id);
  }
}

export default new UserService();
