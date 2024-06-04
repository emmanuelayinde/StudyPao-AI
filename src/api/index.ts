import axios from "axios";
import { getTokens, setTokens, deleteTokens } from "../utils";
import { basic, paoBasic } from "../../api";
import { GetPaoResponseData, GetWelcomeTextData } from "./type";

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

const FAST_API = `${paoBasic}`;
const paoApi = axios.create({
  baseURL: FAST_API,
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

export async function premiumPlan(data: any): Promise<any> {
  const response = await api.post("user/upgrade-plan/premium", data);
  return response.data;
}

export async function createCategory(data: any): Promise<any> {
  tokenInterceptors();
  const response = await api.post("user/create-category", data);
  return response.data;
}

export async function uploadFile(data: any): Promise<any> {
  tokenInterceptors();
  const response = await api.post("user/upload", data);
  return response.data;
}

export async function preProcessFile(data: any): Promise<any> {
  const response = await api.post("user/pre-process-file", data);
  return response.data;
}

export async function getChat(data: {
  file_id: string;
  user: string;
}): Promise<any> {
  const response = await paoApi.post("studdiebuddie-hay-eye/get-chat", data);
  return response.data;
}

export async function getWelcomeText(data: {
  user: string;
  file_id: string;
  file_name: string;
  first_name: string;
}) {
  const response = await paoApi.post<GetWelcomeTextData>(
    "studdiebuddie-hay-eye/generate-welcome-message-and-prompt",
    data
  );
  return response.data;
}

export async function getPaoResponse(data: {
  file_name: string;
  user: string;
  file_id: string;
  body: string;
}) {
  const response = await paoApi.post<GetPaoResponseData>(
    "studdiebuddie-hay-eye/get-response",
    data
  );
  return response.data;
}

// export async function userName(data: userData): Promise<any> {
//   tokenInterceptors();
//   const response = await api.post("user/profile", data);
//   return response.data;
// }
