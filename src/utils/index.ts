// import { queryClient } from "../main";

const STORE_KEY = "STORE_KEY";

export const getTokens = (): any => {
  const token: any = JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
  return token;
};

export const setTokens = (token: any): void => {
  localStorage.setItem(STORE_KEY, JSON.stringify(token));
};

export const deleteTokens = (): void => {
  localStorage.removeItem(STORE_KEY);
};
