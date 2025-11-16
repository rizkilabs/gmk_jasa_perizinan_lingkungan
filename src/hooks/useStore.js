// ---------------------------------------------
// ENSURE DEFAULT ADMIN USER EXISTS
// ---------------------------------------------
function ensureAdmin() {
  const raw = localStorage.getItem("users");
  const users = raw ? JSON.parse(raw) : [];

  // email admin default
  const adminEmail = "admin@mail.com";

  // check if admin already exists
  const exists = users.some(
    (u) => u.email && u.email.toLowerCase() === adminEmail
  );

  if (!exists) {
    const adminUser = {
      id: `admin_${Date.now()}`,
      name: "Administrator",
      email: adminEmail,
      phone: "0000000000",
      businessName: "System",
      password: "admin123",
      role: "admin",
    };

    users.push(adminUser);
    localStorage.setItem("users", JSON.stringify(users));
  }
}

// run before zustand store initialization
ensureAdmin();
// ---------------------------------------------

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      /* THEME */
      theme: "light",
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),

      /* AUTH */
      userLoggedIn: false,
      user: null, // { id, name, email, role }

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

      setRole: (role) =>
        set((state) => ({
          user: state.user ? { ...state.user, role } : null,
        })),

      /* PERMITS */
      permits: [],

      addPermit: (permit) =>
        set((state) => {
          const currentUser = state.user;
          const ownerId = currentUser ? currentUser.id : null;
          const p = { ...permit, ownerId };
          return { permits: [...state.permits, p] };
        }),

      updatePermit: (id, updatedData) =>
        set((state) => ({
          permits: state.permits.map((p) =>
            p.id === id ? { ...p, ...updatedData } : p
          ),
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

      approvePermit: (id) =>
        set((state) => ({
          permits: state.permits.map((p) =>
            p.id === id ? { ...p, status: "Approved" } : p
          ),
        })),

      rejectPermit: (id) =>
        set((state) => ({
          permits: state.permits.map((p) =>
            p.id === id ? { ...p, status: "Rejected" } : p
          ),
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
