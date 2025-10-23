import Category, { ICategory } from '../models/categoryModel';
import { FilterQuery, UpdateQuery } from 'mongoose';

export class CategoryRepository {
  async create(category: AddCategoryRequestType): Promise<ICategory> {
    const newCategory = new Category(category);
    return await newCategory.save();
  }

  async findByStoreId(storeId: string): Promise<ICategory[]> {
    return await Category.find({ storeId: storeId }).exec();
  }

  async findById(id: string): Promise<ICategory | null> {
    return await Category.findById(id).exec();
  }

  async findOne(filter: FilterQuery<ICategory>): Promise<ICategory | null> {
    return await Category.findOne(filter).exec();
  }

  async findAll(filter: FilterQuery<ICategory> = {}): Promise<ICategory[]> {
    return await Category.find(filter).exec();
  }

  async updateById(
    id: string,
    updateData: UpdateQuery<ICategory>
  ): Promise<ICategory | null> {
    return await Category.findByIdAndUpdate(id, updateData, {
      new: true,
    }).exec();
  }

  async deleteById(id: string): Promise<ICategory | null> {
    return await Category.findByIdAndDelete(id).exec();
  }
}

export default new CategoryRepository();
