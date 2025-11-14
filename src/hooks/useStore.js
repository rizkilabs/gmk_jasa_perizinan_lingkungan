// src/hooks/useStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Global Store (Auth + Permits + Theme)
const useStore = create(
  persist(
    (set) => ({
      /**
       * THEME STATE
       */
      theme: "light", // default
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),

      /**
       * AUTH STATE
       */
      userLoggedIn: false,
      user: null,

      login: (userData) =>
        set(() => ({
          userLoggedIn: true,
          user: userData,
        })),

      logout: () =>
        set(() => ({
          userLoggedIn: false,
          user: null,
        })),

      /**
       * PERMIT STATE
       */
      permits: [],

      addPermit: (permit) =>
        set((state) => ({
          permits: [...state.permits, permit],
        })),

      editPermit: (id, updatedData) =>
        set((state) => ({
          permits: state.permits.map((p) =>
            p.id === id ? { ...p, ...updatedData } : p
          ),
        })),

      deletePermit: (id) =>
        set((state) => ({
          permits: state.permits.filter((p) => p.id !== id),
        })),
    }),
    {
      name: "app-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useStore;
export { useStore };
