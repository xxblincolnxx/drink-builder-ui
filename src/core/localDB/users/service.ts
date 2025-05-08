import { localDB } from '../db';
import { v4 as uuidv4 } from 'uuid';
import { User } from './dto';

export const createUser = async (user: Partial<User>): Promise<User> => {
  if (!user.username) {
    return Promise.reject(new Error('Invalid user data'));
  }
  const timestamp = new Date();

  const newUser: User = {
    id: uuidv4(),
    username: user.username,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    lastSynced: timestamp,
    createdAt: timestamp,
    role: user.role || 'employee',
    preferences: user.preferences || { theme: 'light' },
  };
  await localDB.user.add(newUser);
  return newUser;
};
