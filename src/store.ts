import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FileState {
  file: any;
}

interface AuthState {
  tokens: string;
  firstNames: string;
  initials: string;
}

const initialState: AuthState = {
  tokens: "",
  firstNames: "",
  initials: ""
};

export const authTokenStore = create(() => ({
  token: "",
  firstName: "",
}));

export const authTokenStores = create<AuthState>()(
  persist(
    (set) => ({
      ...initialState,
      setFirstName: (firstNames: string) => set({ firstNames }),
      setInitials: (initials: string) => set({initials})
    }),
    {
      name: "auth",
      // whitelist: ['firstName']
    }
  )
);

export const fileStore = create<FileState>(() => ({
  file: null,
}));

export const planStore = create(
  persist(
    () => ({
      plan: "",
    }),
    {
      name: "subscription",
    }
  )
);
