// "TPayload = unknown" allows us to define the shape of the payload at the time a new mutation is created.
export interface StagedMutation<TPayload = unknown> {
  id: string;
  type: string; //TODO: Need to declare action types
  payload: TPayload;
  createdAt: number;
  createdBy: string;
  status: 'pending' | 'completed' | 'failed';
  displayLabel: string;
  notes?: string;
}

export type StagedMutationUpdate<T> = Partial<
  Omit<StagedMutation<T>, 'payload'>
> & {
  payload?: Partial<T>;
};

// Create a DTO per payload as you encounter them with Zod
