import { useState, useEffect, useCallback } from 'react';

type QueryFn<TResult> = () => Promise<TResult>;

export function useLocalQuery<TResult>(
  queryKey: string | unknown[], // Use this to cache/memoize the query
  queryFn: QueryFn<TResult>,
  options?: { enabled?: boolean }
) {
  const [data, setData] = useState<TResult | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Memoize queryKey to avoid re-running unless it changes deeply
  const key = Array.isArray(queryKey) ? JSON.stringify(queryKey) : queryKey;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableQueryFn = useCallback(queryFn, [key]);

  useEffect(() => {
    if (options?.enabled === false) return;

    setLoading(true);
    setError(null);

    stableQueryFn()
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        const error = err instanceof Error ? err : new Error('Unknown error');
        setError(error);
        setLoading(false);
      });
  }, [key, stableQueryFn, options?.enabled]);

  return { data, loading, error };
}
