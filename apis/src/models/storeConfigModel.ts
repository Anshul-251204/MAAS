import { Schema, model, Document, ObjectId } from 'mongoose';

export interface IStoreConfig extends Document {
  storeId: string | ObjectId;
  sliderImages: string[];
  theme: {
    bg: string; // background
    fg: string; // foreground
    p: string; // primary
  };
  tagline: string;
  logo: string;
}

const storeConfigSchema = new Schema<IStoreConfig>(
  {
    storeId: {
      type: Schema.Types.ObjectId,
      ref: 'Store',
    },
    sliderImages: [
      {
        url: String,
        id: String,
      },
    ],
    theme: {
      type: Schema.Types.Mixed,
    },
    tagline: {
      type: Schema.Types.String,
    },
    logo: {
      url: String,
      id: String,
    },
  },
  {
    timestamps: true,
  }
);

const StoreConfig = model<IStoreConfig>('StoreConfig', storeConfigSchema);

export default StoreConfig;
