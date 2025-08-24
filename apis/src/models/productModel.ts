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
        type: String,
        url: String,
        id: String,
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
  },
  {
    timestamps: true,
  }
);

const Product = model<IProduct>('Product', productSchema);

export default Product;
