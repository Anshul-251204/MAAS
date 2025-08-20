import ApiError from "../utils/apiError";
import userRepository from "../repositories/userRepo";
import bcrypt from "bcrypt";
import HTTP from "../config/http";
import type { requestSchemas } from "../validators";
import jwtServices from "./jwtServices";
import { IUser } from "../models/userModel";
import { ObjectId } from "mongoose";

export class UserService {
  async register(userDetails: requestSchemas.CreateUserRequestType) {
    const exists = await userRepository.exists({ email: userDetails.email });
    if (exists) {
      throw new ApiError(
        "User already exists",
        HTTP.statusCode.BAD_REQUEST,
        HTTP.code.BAD_REQUEST,
        "user already exist with email please try with another one 🙂"
      );
    }

    const hashedPassword = await bcrypt.hash(userDetails.password, 10);
    return await userRepository.create({
      email: userDetails.email,
      password: hashedPassword,
      name: userDetails.name || "",
      phone: userDetails.phone,
    });
  }

  async login(
    emailOrPhone: string,
    password: string
  ): Promise<{ user: IUser; accessToken: string } | null> {
    const user = await userRepository.findByEmailAndPhone(emailOrPhone);

    if (!user) {
      throw new ApiError(
        "User not exists with this email or phone no",
        HTTP.statusCode.BAD_REQUEST,
        HTTP.code.BAD_REQUEST,
        "User not present in db please enter valid creds."
      );
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new ApiError(
        "Invalid user credentials !",
        HTTP.statusCode.BAD_REQUEST,
        HTTP.code.BAD_REQUEST,
        "Invalid email/phone and password !"
      );
    }

    const accessToken = await jwtServices.sign({
      _id: user._id,
      email: user.email,
    });

    return { user: user, accessToken: accessToken };
  }

  async getUserByEmail(email: string) {
    return await userRepository.findOne({ email });
  }
  async getUserById(id: string) {
    return await userRepository.findById(id);
  }
}

export default new UserService();
