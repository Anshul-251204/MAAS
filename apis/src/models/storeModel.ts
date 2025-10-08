import { Schema, model, Document, ObjectId } from 'mongoose';

export interface IStore extends Document {
  domain?: string;
  customDomain?: string;
  name: string;
  plan: 'free' | 'basic' | 'premium' | 'enterprise';
  status: 'active' | 'inactive' | 'suspended' | 'pending';
  createdAt: Date;
  updatedAt: Date;
  userId: ObjectId | string;
}

const storeSchema = new Schema<IStore>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    domain: {
      type: String,
      trim: true,
      index: true,
      unique: [true, 'Store already exist with this domain'],
    },
    customDomain: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      required: [true, 'A store name is required.'],
      trim: true,
      maxlength: [255, 'Name cannot be more than 255 characters.'],
    },
    plan: {
      type: String,
      enum: ['free', 'basic', 'premium', 'enterprise'], // Enforces allowed values
      default: 'free',
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'suspended', 'pending'], // Enforces allowed values
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

const Store = model<IStore>('Store', storeSchema);

export default Store;
