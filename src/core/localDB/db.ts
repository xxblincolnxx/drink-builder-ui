import { Dexie, Table } from 'dexie';
import { StagedMutation } from './stagedMutations/dto';
import { User } from './users/dto';

class LocalDB extends Dexie {
  stagedMutations!: Table<StagedMutation>;
  user!: Table<User>;

  constructor() {
    super('drink-builder-local');
    this.version(1).stores({
      stagedMutations: 'id, type, createdAt, createdBy, status',
      user: 'id, username, email, createdAt, role',
    });
  }
}

export const localDB = new LocalDB();
