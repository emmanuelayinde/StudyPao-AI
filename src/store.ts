import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FileState {
  file: any;
  fileId: string;
  fileUrl: string;
  user: string;
  fileName: string;
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

export const useUserInfoStore = create<AuthState>()(
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

// export const fileStore = create<FileState>(() => ({
//   file: null,
// }));

export const useFileStore = create<FileState>()(
  persist(
    () => ({
      file: null,
      fileId: '',
      fileUrl: '',
      user: '',
      fileName: ''
    }),
    {
      name: 'file'
    }
  )
)

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

