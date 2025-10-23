import { Schema, model, Document, ObjectId } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  description: string;
  media: {
    url: string;
    key: string;
  };
  storeId: string | ObjectId;
  active?: boolean;
}

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: [true, 'Category name is required !'],
      unique: [true, 'Category already exists !'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required !'],
    },
    media: {
      key: String,
      url: String,
    },
    storeId: {
      type: Schema.Types.ObjectId,
      ref: 'Store',
    },
    active: {
      type: Schema.Types.Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = model<ICategory>('Category', categorySchema);

export default Category;
