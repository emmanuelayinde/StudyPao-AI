import { create } from "zustand";

interface FileState {
    file: any;
}

export const authTokenStore = create(() => ({
    token: '',
    firstName: ''
}))

export const fileStore = create<FileState>(() => ({
    file: null
}))