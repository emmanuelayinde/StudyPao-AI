import axios from "axios";
import { getTokens, setTokens, deleteTokens } from "../utils";
import { basic } from "../../api";

interface authData {
  authenticationType: string;
  token: string;
}

// interface userData {
//   firstName: string;
//   lastName: string;
// }

export function tokenInterceptors() {
  api.interceptors.request.use(
    (config) => {
      const token = getTokens();
      if (token) {
        config.headers.Authorization = `Bearer ${token.token}`;
      }
      return config;
    },
    (error) => {
      const originalRequest = error.config;
      const errorResponse = error.response;

      if (errorResponse.status === 401) {
        return getRefreshToken()
          .then((data) => {
            setTokens(data);
            if (originalRequest) {
              originalRequest.headers.Authorization = `Bearer ${data.token}`;
            }
            return originalRequest;
          })
          .catch(() => {
            deleteTokens();
            //   deleteUserDetail();
            return Promise.reject(error);
          });
      }
      return Promise.reject(error);
    }
  );
}

const BASE_URL = `${basic}`;
const api = axios.create({
  baseURL: BASE_URL,
});

export async function getRefreshToken() {
  const tokens = getTokens();
  const response = await api.get("user/refresh-token", {
    headers: {
      Authorization: `Bearer ${tokens.refreshToken}`,
    },
  });
  return response.data;
}

export async function signUp(data: authData): Promise<any> {
  const response = await api.post("user/signup", data);
  return response.data;
}

export async function signIn(data: authData): Promise<any> {
  const response = await api.post("user/signin", data);
  return response.data;
}

// export async function userName(data: userData): Promise<any> {
//   tokenInterceptors();
//   const response = await api.post("user/profile", data);
//   return response.data;
// }
