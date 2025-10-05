import { requestSchemas } from '../validators';
import Theme, { ITheme } from '../models/themeModel';
import { FilterQuery, UpdateQuery } from 'mongoose';

export class ThemeRepository {
  async create(
    themeConfig: requestSchemas.CreateThemeSchemaType
  ): Promise<ITheme> {
    const themeDto: requestSchemas.CreateThemeSchemaType = {
      storeId: themeConfig.storeId,
      logo: themeConfig.logo,
      media: themeConfig.media,
      theme: themeConfig.theme,
      storeTagLine: themeConfig?.storeTagLine,
      backgroud: themeConfig.backgroud,
      foreground: themeConfig.foreground,
      accent: themeConfig.accent,
    };
    const theme = new Theme(themeDto);
    return await theme.save();
  }

  async findById(id: string): Promise<ITheme | null> {
    return await Theme.findById(id).exec();
  }
  async findByStoreId(storeId: string): Promise<ITheme | null> {
    return await Theme.findOne({ storeId });
  }

  // async findBySlug(slug: string): Promise<IStore | null> {
  //   return await Store.findOne({ slug }).exec();
  // }

  // async findByDomain(
  //   domain: string,
  //   customDomain?: string
  // ): Promise<IStore | null> {
  //   if (domain && customDomain) {
  //     return await Store.findOne({
  //       $or: [{ domain }, { customDomain: customDomain }],
  //     }).exec();
  //   }

  //   return await Store.findOne({
  //     $or: [{ domain }, { customDomain: domain }],
  //   }).exec();
  // }

  // async findOne(filter: FilterQuery<IStore>): Promise<IStore | null> {
  //   return await Store.findOne(filter).exec();
  // }

  // async findAll(filter: FilterQuery<IStore> = {}): Promise<IStore[]> {
  //   return await Store.find(filter).exec();
  // }

  // async updateById(
  //   id: string,
  //   updateData: UpdateQuery<IStore>
  // ): Promise<IStore | null> {
  //   return await Store.findByIdAndUpdate(id, updateData, { new: true }).exec();
  // }

  // async updateBySlug(
  //   slug: string,
  //   updateData: UpdateQuery<IStore>
  // ): Promise<IStore | null> {
  //   return await Store.findOneAndUpdate({ slug }, updateData, {
  //     new: true,
  //   }).exec();
  // }

  // async deleteById(id: string): Promise<IStore | null> {
  //   return await Store.findByIdAndDelete(id).exec();
  // }

  // async deleteBySlug(slug: string): Promise<IStore | null> {
  //   return await Store.findOneAndDelete({ slug }).exec();
  // }
}

export default new ThemeRepository();
