import { useEffect, useState, useCallback } from "react";

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: any) => void;
  autoFetch?: boolean; //  new flag to control auto fetch
}

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: any;
}

export function useApi<T>(
  apiFn: (...args: any[]) => Promise<any>,
  deps: any[] = [],
  options?: UseApiOptions<T>,
) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchData = useCallback(async (...args: any[]) => {
    setState({ data: null, loading: true, error: null });
    try {
      const res = await apiFn(...args);
      const data: T = res.data;
      setState({ data, loading: false, error: null });
      options?.onSuccess?.(data);
      return data;
    } catch (err: any) {
      setState({ data: null, loading: false, error: err });
      options?.onError?.(err);
      return null;
    }
  }, deps);

  useEffect(() => {
    // 👇 Only auto-fetch when autoFetch
    if (options?.autoFetch !== false) {
      fetchData();
    }
  }, [fetchData, options?.autoFetch]);

  return { ...state, refetch: fetchData };
}
