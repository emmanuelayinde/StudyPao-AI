import { create } from "zustand";

export const authTokenStore = create(() => ({
    token: '',
    firstName: ''
}))