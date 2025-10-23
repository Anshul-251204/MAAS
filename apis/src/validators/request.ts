import { z } from 'zod/v4';
import mongoose from 'mongoose';

export const createUserSchema = z.object({
  name: z
    .string({
      error: issue =>
        issue.input === undefined ? 'Name is required' : undefined,
    })
    .max(100, {
      error: issue =>
        issue.code === 'too_big'
          ? 'Name must be at most 100 characters'
          : undefined,
    }),

  email: z
    .string({
      error: issue =>
        issue.input === undefined ? 'Email is required' : undefined,
    })
    .email({ error: () => 'Invalid email format' })
    .max(255, {
      error: issue =>
        issue.code === 'too_big'
          ? 'Email must be at most 255 characters'
          : undefined,
    }),

  phone: z
    .string({
      error: issue =>
        issue.input === undefined
          ? 'Phone no is required'
          : typeof issue.input !== 'string'
            ? 'Phone no must be a string'
            : undefined,
    })
    .regex(/^\d+$/, {
      error: () => 'Phone number must contain only digits',
    })
    .min(7, {
      error: issue =>
        issue.code === 'too_small' ? 'Phone number is too short' : undefined,
    })
    .max(11, {
      error: issue =>
        issue.code === 'too_big' ? 'Phone number is too long' : undefined,
    }),

  password: z
    .string({
      error: issue =>
        issue.input === undefined ? 'Password is required' : undefined,
    })
    .min(8, {
      error: issue =>
        issue.code === 'too_small'
          ? 'Password must be at least 8 characters'
          : undefined,
    })
    .max(12, {
      error: issue =>
        issue.code === 'too_big'
          ? 'Password must be at most 12 characters'
          : undefined,
    }),
});

export const updateUserSchema = createUserSchema.partial();

export type CreateUserRequestType = z.infer<typeof createUserSchema>;
export type UpdateUserRequestType = z.infer<typeof updateUserSchema>;

export const LoginUserSchema = z.object({
  email: z
    .string({
      error: issue =>
        issue.input === undefined ? 'Email is required' : undefined,
    })
    .email({ error: () => 'Invalid email format' })
    .max(255, {
      error: issue =>
        issue.code === 'too_big'
          ? 'Email must be at most 255 characters'
          : undefined,
    }),
  password: z
    .string({
      error: issue =>
        issue.input === undefined ? 'Password is required' : undefined,
    })
    .min(8, {
      error: issue =>
        issue.code === 'too_small'
          ? 'Password must be at least 8 characters'
          : undefined,
    })
    .max(12, {
      error: issue =>
        issue.code === 'too_big'
          ? 'Password must be at most 12 characters'
          : undefined,
    }),
});

export type LoginUserRequestType = z.infer<typeof LoginUserSchema>;

export const createStoreSchema = z.object({
  domain: z
    .string()
    .trim()
    .optional()
    .transform(val => val?.toLowerCase()),
  customDomain: z
    .string()
    .trim()
    .optional()
    .transform(val => val?.toLowerCase()),
  name: z
    .string({
      error: issue =>
        issue.input === undefined ? 'A store name is required.' : undefined,
    })
    .trim()
    .max(255, {
      error: issue =>
        issue.code === 'too_big'
          ? 'Name cannot be more than 255 characters.'
          : undefined,
    }),
  description: z
    .string({
      error: issue =>
        issue.input === undefined ? 'Store description is required' : undefined,
    })
    .max(300, {
      error: issue =>
        issue.code === 'too_big'
          ? 'Description must be at most 300 characters'
          : undefined,
    }),
  userId: z.string().optional(),
});

export type CreateStoreRequestType = z.infer<typeof createStoreSchema>;

export const createProductSchema = z.object({
  name: z.string({
    error: issue => {
      if (issue.input == undefined) {
        return 'Name is required !';
      }
      if (issue.code === 'invalid_type') {
        return 'Name can only be string';
      }
    },
  }),
  description: z.string({
    error: issue => {
      if (issue.input === undefined) {
        return 'Description is required !';
      }
      if (issue.code === 'invalid_type') {
        return 'Description can only be string';
      }
    },
  }),
  media: z.array(
    z.object({
      type: z.enum(['videos', 'images']),
      id: z.string(),
      url: z.url(),
    }),
    {
      error: issue => {
        if (issue.input === undefined) {
          return 'Media is required !';
        }
        if (issue.code == 'invalid_type') {
          return 'Media can only be a array';
        }
      },
    }
  ),
  category: z.string({
    error: issue => {
      if (issue.input === undefined) {
        return 'Category is required !';
      }
      if (issue.code === 'invalid_type') {
        return 'Category can only be string';
      }
    },
  }),
  price: z
    .number({
      error: issue => {
        if (issue.input === undefined) {
          return 'Price is required !';
        }
        if (issue.code === 'invalid_type') {
          return 'Price can only be string';
        }
      },
    })
    .min(0, {
      error: issue => {
        if (issue.code == 'too_small') {
          return 'Price can not be less then zero';
        }
      },
    }),
  storeId: z.union([z.string(), z.instanceof(mongoose.Types.ObjectId)], {
    error: issue => {
      if (issue.input == undefined) {
        return 'Store id is required !';
      }
      if (issue.code == 'invalid_union') {
        return 'Invalid store id';
      }
    },
  }),
  stock: z
    .number({
      error: issue => {
        if (issue.code == 'invalid_type') {
          return 'Stock can only be a number';
        }
      },
    })
    .min(1, {
      error: issue => {
        if (issue.code == 'too_small') {
          return 'Stock can not be less one';
        }
      },
    }),
  sizes: z.array(z.string()).optional(),
  colors: z
    .array(
      z.object({
        color: z.string(),
        value: z.string(),
      })
    )
    .optional(),
  keyValues: z
    .array(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    )
    .optional(),
});

export type CreateProductSchemaType = z.infer<typeof createProductSchema>;

// @theme

export const CreateThemeSchema = z.object({
  storeId: z.string({
    error: issue =>
      issue.input === undefined ? 'StoreId is required.' : undefined,
  }),
  logo: z.url({
    error: issue =>
      issue.input === undefined ? 'Logo is required.' : undefined,
  }),
  storeTagLine: z.string().optional(),
  media: z
    .array(
      z.object({
        url: z.string(),
        key: z.string(),
      })
    )
    .min(1, 'at least one file required')
    .max(5, 'max 5 files'),
  theme: z.enum(['MINIMAL', 'BENTO']),
  backgroud: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
    message: 'Invalid hex color code for Background',
  }),
  foreground: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
    message: 'Invalid hex color code for Foreground',
  }),
  accent: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
    message: 'Invalid hex color code for Accent',
  }),
});

export type CreateThemeSchemaType = z.infer<typeof CreateThemeSchema>;

// @category

export const CreateCategorySchema = z.object({
  name: z
    .string()
    .min(2, 'Name is required !')
    .max(40, 'Name can only 40 words'),
  description: z
    .string()
    .min(2, 'Description is required !')
    .max(100, 'Description can only 100 words'),
  media: z.object({
    key: z.string(),
    url: z.url(),
  }),
});

export type CreateCategoryType = z.infer<typeof CreateCategorySchema>;
