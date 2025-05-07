import { localDB } from '../db';
import { StagedMutation, StagedMutationUpdate } from './dto';
import { v4 as uuidv4 } from 'uuid';

export const addStagedMutation = <T>(
  mutation: Omit<StagedMutation<T>, 'id'>
): Promise<string> => {
  return localDB.stagedMutation.add({ id: uuidv4(), ...mutation });
};

export const updateStagedMutation = <T>(
  id: string,
  mutation: StagedMutationUpdate<T>
): Promise<number> /** returns 1 if update success, 0 if no matching record */ => {
  return localDB.stagedMutation.update(id, mutation);
};

export const deleteStagedMutation = (id: string): Promise<void> => {
  return localDB.stagedMutation.delete(id);
};

export const getStagedMutation = (
  id: string
): Promise<StagedMutation | undefined> => {
  return localDB.stagedMutation.get(id);
};

export const getStagedMutations = (): Promise<StagedMutation[]> => {
  return localDB.stagedMutation.toArray();
};
