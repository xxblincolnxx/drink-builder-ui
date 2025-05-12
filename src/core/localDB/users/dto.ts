import { z } from 'zod';

export const RolesSchema = z.enum([
  'admin',
  'manager',
  'employee',
  'unassigned',
]);

export const UserPreferencesSchema = z.object({
  theme: z.enum(['light', 'dark']),
});

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().optional(),
  lastSynced: z.date(),
  createdAt: z.date(),
  role: RolesSchema,
  preferences: UserPreferencesSchema,
});

export const CreateUserDTOSchema = z.object({
  username: z.string(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().optional(),
  preferences: UserPreferencesSchema.optional().default({
    theme: 'light',
  }),
  role: RolesSchema.optional().default('unassigned'),
});

export type Roles = z.infer<typeof RolesSchema>;
export type UserPreferences = z.infer<typeof UserPreferencesSchema>;
export type User = z.infer<typeof UserSchema>;
export type CreateUserDTO = z.infer<typeof CreateUserDTOSchema>;
