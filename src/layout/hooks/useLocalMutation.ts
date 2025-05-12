import { useState, useCallback } from 'react';

type MutationFn<TInput, TResult> = (input: TInput) => Promise<TResult>;

export function useLocalMutation<TInput, TResult>(
  mutationFn: MutationFn<TInput, TResult>
) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [result, setResult] = useState<TResult | null>(null);

  const mutate = useCallback(
    async (input: TInput) => {
      setLoading(true);
      setError(null);
      try {
        const res = await mutationFn(input);
        setResult(res);
        return res;
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        setError(error);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [mutationFn]
  );

  return { mutate, loading, error, result };
}
