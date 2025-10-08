
import { useEffect, useState, useCallback } from "react";

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: any;
}

export function useApi<T>(
  apiFn: (...args: any[]) => Promise<any>,
  deps: any[] = [],
) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setState({ data: null, loading: true, error: null });
    try {
      const res = await apiFn();
      setState({ data: res.data, loading: false, error: null });
    } catch (err: any) {
      setState({ data: null, loading: false, error: err });
    }
  }, deps);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...state, refetch: fetchData };
}
