import Cookies from "js-cookie";

type ICookieKeys = "refreshToken" | "accessToken";

export const setCookie = (
  key: ICookieKeys,
  value: string | object,
  exp: number | Date | undefined
) => {
  return Cookies.set(key, JSON.stringify(value), { expires: exp });
};

export const getCookie = (key: ICookieKeys): any | undefined => {
  const c = Cookies.get(key);
  if (c) return JSON.parse(c);
  return undefined;
};

export const removeCookie = (key: ICookieKeys) => {
  return Cookies.remove(key);
};
