import ApiError from "../utils/apiError";
import { User, IUser } from "../models/userModel";
import { FilterQuery, UpdateQuery } from "mongoose";
import HTTP from "../config/http";

export class UserRepository {
  async create(userData: Partial<IUser>): Promise<IUser> {
    try {
      const user = new User(userData);
      return await user.save();
    } catch (error) {
      throw new ApiError(
        "Failed to create user",
        HTTP.statusCode.INTERNAL_SERVER_ERROR,
        HTTP.code.SERVER_ERROR,
        "db failed"
      );
    }
  }

  async findById(id: string): Promise<IUser | null> {
    try {
      return await User.findById(id).exec();
    } catch (error) {
      throw new ApiError(
        "Failed to find user",
        HTTP.statusCode.NOT_FOUND,
        HTTP.code.NOT_FOUND,
        "db failed"
      );
    }
  }

  async findByEmailAndPhone(emailOrPhone: string): Promise<IUser | null> {
    try {
      return await User.findOne({
        $or: [
          {
            email: emailOrPhone,
          },
          {
            phone: emailOrPhone,
          },
        ],
      });
    } catch (error) {
      throw new ApiError(
        "Failed to find user",
        HTTP.statusCode.NOT_FOUND,
        HTTP.code.NOT_FOUND,
        "db failed"
      );
    }
  }

  async findOne(filter: FilterQuery<IUser>): Promise<IUser | null> {
    try {
      return await User.findOne(filter).exec();
    } catch (error) {
      throw new ApiError(
        "Failed to find user",
        HTTP.statusCode.NOT_FOUND,
        HTTP.code.NOT_FOUND,
        "db failed"
      );
    }
  }

  async findAll(filter: FilterQuery<IUser> = {}): Promise<IUser[]> {
    try {
      return await User.find(filter).exec();
    } catch (error) {
      throw new ApiError(
        "Failed to find users",
        HTTP.statusCode.NOT_FOUND,
        HTTP.code.NOT_FOUND,
        "db failed"
      );
    }
  }

  async updateById(
    id: string,
    updateData: UpdateQuery<IUser>
  ): Promise<IUser | null> {
    try {
      return await User.findByIdAndUpdate(id, updateData, { new: true }).exec();
    } catch (error) {
      throw new ApiError(
        "Failed to update user",
        HTTP.statusCode.INTERNAL_SERVER_ERROR,
        HTTP.code.SERVER_ERROR,
        "db failed"
      );
    }
  }

  async deleteById(id: string): Promise<IUser | null> {
    try {
      return await User.findByIdAndDelete(id).exec();
    } catch (error) {
      throw new ApiError(
        "Failed to delete user",
        HTTP.statusCode.INTERNAL_SERVER_ERROR,
        HTTP.code.SERVER_ERROR,
        "db failed"
      );
    }
  }

  async exists(filter: FilterQuery<IUser>): Promise<boolean> {
    try {
      return await User.exists(filter).then((result) => !!result);
    } catch (error) {
      throw new ApiError(
        "Failed to check user existence",
        HTTP.statusCode.INTERNAL_SERVER_ERROR,
        HTTP.code.SERVER_ERROR,
        "db failed"
      );
    }
  }
}

export default new UserRepository();
