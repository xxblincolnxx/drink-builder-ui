import { Dexie, Table } from 'dexie';
import { StagedMutation } from './stagedMutations/dto';

class LocalDB extends Dexie {
  stagedMutation!: Table<StagedMutation>;

  constructor() {
    super('drinkBuilderLocalDB');
    this.version(1).stores({
      stagedMutation: 'id, table, operation, createdAt, createdBy, status',
    });
  }
}

export const localDB = new LocalDB();
