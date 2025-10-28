import { useEffect, useState, useCallback } from "react";

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: any) => void;
  autoFetch?: boolean;
  debounceMs?: number; // 👈 new option for debouncing
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
    if (options?.autoFetch === false) return;

    const delay = options?.debounceMs ?? 0;
    const timer = setTimeout(() => {
      fetchData();
    }, delay);

    return () => clearTimeout(timer);
  }, [...deps, options?.autoFetch, options?.debounceMs]);

  return { ...state, refetch: fetchData };
}
