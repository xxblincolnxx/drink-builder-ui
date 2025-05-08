import { localDB } from './localDB/db';

export async function devResetDB() {
  if (import.meta.env.DEV) {
    await localDB.delete();
    await localDB.open();
    console.log('-- LocalDB reset --');
  }
}
