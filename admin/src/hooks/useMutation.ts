import { useState } from "react";

interface UseMutationOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: any) => void;
}

export function useMutation<T>(
  mutationFn: (...args: any[]) => Promise<any>,
  options?: UseMutationOptions<T>,
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const mutate = async (...args: any[]): Promise<T | null> => {
    setLoading(true);
    setError(null);

    try {
      const res = await mutationFn(...args);
      const data: T = res.data;
      options?.onSuccess?.(data);
      return data;
    } catch (err: any) {
      console.log("api Error => ", err);
      if (err.response.data) {
        setError(err.response.data);
      } else {
        setError(err);
      }
      options?.onError?.(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading, error };
}
