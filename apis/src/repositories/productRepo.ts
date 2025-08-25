import { requestSchemas } from '../validators';
import Product, { IProduct } from '../models/productModel';
import { FilterQuery, UpdateQuery } from 'mongoose';

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
}

export default new ProductRepository();
