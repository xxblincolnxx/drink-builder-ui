import Dexie from 'dexie';

export const db = new Dexie('drinkBuilderLocalDB');
// TODO: Append tables and versioning
