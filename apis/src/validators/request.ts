import { z } from "zod/v4";

export const createUserSchema = z.object({
  name: z.string({
    error: (issue) =>
      issue.input === undefined
        ? "Name is required"
        : undefined,
  }).max(100, {
    error: (issue) =>
      issue.code === "too_big"
        ? "Name must be at most 100 characters"
        : undefined,
  }),

  email: z.string({
    error: (issue) =>
      issue.input === undefined
        ? "Email is required"
        : undefined,
  }).email({ error: () => "Invalid email format" }).max(255, {
    error: (issue) =>
      issue.code === "too_big"
        ? "Email must be at most 255 characters"
        : undefined,
  }),

  phone: z.string({
    error: (issue) =>
      issue.input === undefined
        ? "Phone no is required"
        : typeof issue.input !== "string"
        ? "Phone no must be a string"
        : undefined,
  }).regex(/^\d+$/, {
    error: () => "Phone number must contain only digits",
  }).min(7, {
    error: (issue) =>
      issue.code === "too_small"
        ? "Phone number is too short"
        : undefined,
  }).max(11, {
    error: (issue) =>
      issue.code === "too_big"
        ? "Phone number is too long"
        : undefined,
  }),

  password: z.string({
    error: (issue) =>
      issue.input === undefined
        ? "Password is required"
        : undefined,
  }).min(8, {
    error: (issue) =>
      issue.code === "too_small"
        ? "Password must be at least 8 characters"
        : undefined,
  }).max(12, {
    error: (issue) =>
      issue.code === "too_big"
        ? "Password must be at most 12 characters"
        : undefined,
  }),
});

export const updateUserSchema = createUserSchema.partial();

export type CreateUserRequestType = z.infer<typeof createUserSchema>;
export type UpdateUserRequestType = z.infer<typeof updateUserSchema>;

export const LoginUserSchema = z.object({
  email: z.string({
    error: (issue) =>
      issue.input === undefined
        ? "Email is required"
        : undefined,
  }).email({ error: () => "Invalid email format" }).max(255, {
    error: (issue) =>
      issue.code === "too_big"
        ? "Email must be at most 255 characters"
        : undefined,
  }),
  password: z.string({
    error: (issue) =>
      issue.input === undefined
        ? "Password is required"
        : undefined,
  }).min(8, {
    error: (issue) =>
      issue.code === "too_small"
        ? "Password must be at least 8 characters"
        : undefined,
  }).max(12, {
    error: (issue) =>
      issue.code === "too_big"
        ? "Password must be at most 12 characters"
        : undefined,
  }),
});

export type LoginUserRequestType = z.infer<typeof LoginUserSchema>;

export const createStoreSchema = z.object({
  domain: z.string().trim().optional(),
  customDomain: z.string().trim().optional(),
  name: z.string({
    error: (issue) =>
      issue.input === undefined
        ? "A store name is required."
        : undefined,
  }).trim().max(255, {
    error: (issue) =>
      issue.code === "too_big"
        ? "Name cannot be more than 255 characters."
        : undefined,
  }),
  description: z.string({
    error: (issue) =>
      issue.input === undefined
        ? "Store description is required"
        : undefined,
  }).max(300, {
    error: (issue) =>
      issue.code === "too_big"
        ? "Description must be at most 300 characters"
        : undefined,
  }),
  userId: z.string().optional(),
});

export type CreateStoreRequestType = z.infer<typeof createStoreSchema>;
