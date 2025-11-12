import { create } from "zustand";

export const useStore = create((set) => ({
  theme: "light",
  chatbotVisible: false,
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
  toggleChatbot: () =>
    set((state) => ({ chatbotVisible: !state.chatbotVisible })),
}));
