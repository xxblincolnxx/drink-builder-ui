export interface User {
  id: string;
  username: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  lastSynced: Date;
  createdAt: Date;
  role: Roles;
  preferences: UserPreferences;
}

export interface CreateUserDTO {
  username: string;
  first_name?: string;
  last_name?: string;
  email?: string;
}

export type Roles = 'admin' | 'manager' | 'employee' | 'unassigned';

export interface UserPreferences {
  theme: 'light' | 'dark';
}
