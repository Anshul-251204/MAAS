import { requestSchemas } from "../validators";
import Store, { IStore } from "../models/storeModel";
import { FilterQuery, UpdateQuery } from "mongoose";

export class StoreRepository {
  async create(
    storeData: requestSchemas.CreateStoreRequestType
  ): Promise<IStore> {
    const store = new Store({ ...storeData, plan: "free", status: "active" });
    return await store.save();
  }

  async findById(id: string): Promise<IStore | null> {
    return await Store.findById(id).exec();
  }

  async findBySlug(slug: string): Promise<IStore | null> {
    return await Store.findOne({ slug }).exec();
  }

  async findByDomain(
    domain: string,
    customDomain?: string
  ): Promise<IStore | null> {

    if (domain && customDomain) {
      return await Store.findOne({
        $or: [{ domain }, { customDomain: customDomain }],
      }).exec();
    }

    return await Store.findOne({
      $or: [{ domain }, { customDomain: domain }],
    }).exec();
  }

  async findOne(filter: FilterQuery<IStore>): Promise<IStore | null> {
    return await Store.findOne(filter).exec();
  }

  async findAll(filter: FilterQuery<IStore> = {}): Promise<IStore[]> {
    return await Store.find(filter).exec();
  }

  async updateById(
    id: string,
    updateData: UpdateQuery<IStore>
  ): Promise<IStore | null> {
    return await Store.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  async updateBySlug(
    slug: string,
    updateData: UpdateQuery<IStore>
  ): Promise<IStore | null> {
    return await Store.findOneAndUpdate({ slug }, updateData, {
      new: true,
    }).exec();
  }

  async deleteById(id: string): Promise<IStore | null> {
    return await Store.findByIdAndDelete(id).exec();
  }

  async deleteBySlug(slug: string): Promise<IStore | null> {
    return await Store.findOneAndDelete({ slug }).exec();
  }

  async exists(filter: FilterQuery<IStore>): Promise<boolean> {
    return await Store.exists(filter).then((result: any) => !!result);
  }

  async findByStatus(status: IStore["status"]): Promise<IStore[]> {
    return await Store.find({ status }).exec();
  }

  async findByPlan(plan: IStore["plan"]): Promise<IStore[]> {
    return await Store.find({ plan }).exec();
  }
}

export default new StoreRepository();
