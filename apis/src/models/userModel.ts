// src/models/User.ts
import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
        type: String,
        maxlength: 100,
      },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 255,
      trim: true,
      lowercase: true,
      index: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: 255,
    },
   
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser>("User", UserSchema);
