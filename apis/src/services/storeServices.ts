import ApiError from '../utils/apiError';
import HTTP from '../config/http';
import type { requestSchemas } from '../validators';
import StoreRepo from '../repositories/storeRepo';
import env from '../config/env';
import ThemeRepo from '../repositories/themeRepo';
import { ObjectId } from 'mongoose';
import storeRepo from '../repositories/storeRepo';

export class StoreServices {
  async registerStore(
    storeDetails: requestSchemas.CreateStoreRequestType,
    userId: string
  ) {
    if (!storeDetails?.domain) {
      storeDetails.domain = `${storeDetails.name.toLowerCase()}.${env.get(
        'FRONTEND_DOMAIN'
      )}`;
    }

    if (!storeDetails?.customDomain) {
      storeDetails.customDomain = '';
    }

    if (
      storeDetails.domain &&
      !storeDetails.domain.includes(env.get('FRONTEND_DOMAIN')!)
    ) {
      storeDetails.domain = `${storeDetails.domain}.${env.get('FRONTEND_DOMAIN')}`;
    }

    console.log('domain', storeDetails.domain);

    const storeExist = await StoreRepo.findByDomain(
      storeDetails.domain.toLowerCase()!,
      storeDetails.customDomain.toLowerCase()!
    );

    console.log('store exist', storeExist);

    if (storeExist) {
      throw new ApiError(
        'Store already exists with this domain or custom domin',
        HTTP.statusCode.BAD_REQUEST,
        HTTP.code.BAD_REQUEST,
        'store already exist with domain please try with another one 🙂'
      );
    }

    const store = await StoreRepo.create({ ...storeDetails, userId: userId });

    return store;
  }

  async getByUserId(userId: string) {
    return await storeRepo.findOne({ userId });
  }

  async getByDomin(domin: string) {
    return await StoreRepo.findByDomain(domin);
  }
  async getById(id: string) {
    return await StoreRepo.findById(id);
  }
  async AddThemeConfig(config: requestSchemas.CreateThemeSchemaType) {
    const theme = ThemeRepo.create(config);
    return theme;
  }
  async getStoreDetails(storeId: string) {
    const store = await StoreRepo.findById(storeId);
    const theme = await ThemeRepo.findByStoreId(storeId);
    return { store, theme };
  }

  async getStoreDetailsByDomain(domain: string) {
    const store = await StoreRepo.findOne({ domain: domain });
    const theme = await ThemeRepo.findByStoreId(store?._id as string);
    return { store, theme };
  }
}

export default new StoreServices();
