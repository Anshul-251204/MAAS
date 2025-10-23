import { Schema, model, Document, ObjectId } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  media: {
    type: 'videos' | 'images';
    id: string;
    url: string;
  }[];
  category: string;
  price: number;
  storeId: string | ObjectId;
  stock?: number;
  sizes?: string[];
  colors?: {
    color: string;
    value: string;
  }[];
  keyValues?: {
    key: string;
    value: string;
  }[];
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required !'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required !'],
    },
    media: [
      {
        type: {
          type: String,
          enum: ['videos', 'images'],
          required: true,
        },
        id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, 'Product category is required !'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required !'],
    },
    storeId: {
      type: Schema.Types.ObjectId,
      ref: 'Store',
    },
    stock: {
      type: Number,
    },
    sizes: [
      {
        type: String,
      },
    ],
    colors: [
      {
        color: {
          type: String,
          required: [true, 'Color name is required!'],
        },
        value: {
          type: String,
          required: [true, 'Color value is required!'],
        },
      },
    ],
    keyValues: [
      {
        key: {
          type: String,
          required: [true, 'Key is required!'],
        },
        value: {
          type: String,
          required: [true, 'Value is required!'],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Product = model<IProduct>('Product', productSchema);

export default Product;
