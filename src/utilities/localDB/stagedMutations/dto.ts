// "TPayload = unknown" allows us to define the shape of the payload at the time a new mutation is created.
export interface StagedMutation<TPayload = unknown> {
  id: string;
  table: string; //TODO: turn into a union of all table names
  operation: 'create' | 'update' | 'delete';
  payload: TPayload;
  targetId: string;
  createdAt: number;
  createdBy: string;
  status: 'pending' | 'approved' | 'rejected';
  displayLabel: string;
  notes?: string;
}

export type StagedMutationUpdate<T> = Partial<
  Omit<StagedMutation<T>, 'payload'>
> & {
  payload?: Partial<T>;
};
