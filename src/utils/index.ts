// import { queryClient } from "../main";

const STORE_KEY = "STORE_KEY";
const USER_KEY = "firstName";

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

export const deleteUserDetail = () => {
  localStorage.removeItem(USER_KEY);
};

export const setUserDetail = (name: string) => {
  localStorage.setItem(USER_KEY, JSON.stringify(name));
};

export const getUserDetail = () => {
  const userName: string = localStorage.getItem(USER_KEY) || "" ;
  return userName
}

