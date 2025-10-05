import mongoose, { Schema, Document } from 'mongoose';

export interface ITheme extends Document {
  storeId: string | mongoose.Schema.Types.ObjectId;
  logo: string;
  storeTagLine?: string;
  media: {
    url: string;
    key: string;
  }[];
  theme: 'MINIMAL' | 'BENTO';
  backgroud: string;
  foreground: string;
  accent: string;
}

const MediaSchema = new Schema({
  url: { type: String, required: true },
  key: { type: String, required: true },
});

const ThemeSchema = new Schema<ITheme>(
  {
    storeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Store',
      required: [true,"Store id is required !"],
    },
    logo: { type: String, required: [true, 'Logo is required'] },
    storeTagLine: { type: String },
    media: {
      type: [MediaSchema],
      validate: [
        {
          validator: (v: any[]) => v.length >= 1,
          message: 'At least one file required',
        },
        {
          validator: (v: any[]) => v.length <= 5,
          message: 'Maximum 5 files allowed',
        },
      ],
      required: true,
    },
    theme: {
      type: String,
      enum: ['MINIMAL', 'BENTO'],
      required: true,
    },
    backgroud: {
      type: String,
      match: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      required: true,
    },
    foreground: {
      type: String,
      match: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      required: true,
    },
    accent: {
      type: String,
      match: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      required: true,
    },
  },
  { timestamps: true }
);

const Theme = mongoose.model<ITheme>('Theme', ThemeSchema);
export default Theme;
