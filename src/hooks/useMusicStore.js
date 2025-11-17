import { create } from "zustand";

export const useMusicStore = create((set) => ({
  isMuted: true,
  setMuted: (value) => set({ isMuted: value }),
}));
