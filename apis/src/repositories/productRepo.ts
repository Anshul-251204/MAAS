import { requestSchemas } from '../validators';
import Product, { IProduct } from '../models/productModel';
import { FilterQuery, UpdateQuery } from 'mongoose';

type FindByStoreIdReturnType = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  products: IProduct[];
};

export class ProductRepository {
  async create(
    productData: requestSchemas.CreateProductSchemaType
  ): Promise<IProduct> {
    const product = new Product({ ...productData });
    return await product.save();
  }

  async findById(id: string): Promise<IProduct | null> {
    return await Product.findById(id).exec();
  }

  async findOne(filter: FilterQuery<IProduct>): Promise<IProduct | null> {
    return await Product.findOne(filter).exec();
  }

  async findAll(filter: FilterQuery<IProduct> = {}): Promise<IProduct[]> {
    return await Product.find(filter).exec();
  }

  async updateById(
    id: string,
    updateData: UpdateQuery<IProduct>
  ): Promise<IProduct | null> {
    return await Product.findByIdAndUpdate(id, updateData, {
      new: true,
    }).exec();
  }

  async deleteById(id: string): Promise<IProduct | null> {
    return await Product.findByIdAndDelete(id).exec();
  }
  async findByStoreId(
    storeId: string,
    search: string = '',
    page: number = 0,
    limit: number = 20,
    sortField: string,
    sortOrder: 1 | -1
  ): Promise<FindByStoreIdReturnType> {
    const skip = (page - 1) * limit;

    const filter: Record<string, string | number | object> = {
      storeId: storeId,
    };

    if (search) {
      const regex = new RegExp(search as string, 'i');
      filter.$or = [{ name: regex }, { description: regex }];
    }

    const [products, total] = await Promise.all([
      Product.find(filter)
        .sort({ [sortField]: sortOrder })
        .skip(skip)
        .limit(limit),
      Product.countDocuments(filter),
    ]);
    return {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      products: products,
    };
  }
}

export default new ProductRepository();
