import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IStoreStore {
  store: StoreType | null;
  setStore: (store: StoreType) => void;
}
export const useStoreStore = create<IStoreStore>()(
  persist(
    (set) => ({
      store: null,
      setStore: (store: StoreType) => set(() => ({ store: store })),
    }),
    {
      name: "store-storage", // key for localStorage
    },
  ),
);
