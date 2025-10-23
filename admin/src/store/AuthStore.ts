// src/store/auth.store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  user: { id: string; name: string } | null;
  token: string | null;
  setUser: (user: AuthState["user"]) => void;
  setToken: (token: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: "auth-storage", // key for localStorage
      partialize: (state) => ({ token: state.token, user: state.user }),
    },
  ),
);
