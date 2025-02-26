import axios from "axios";

import createAuthRefreshInterceptor from "axios-auth-refresh";
// import $session from "../store/session";
import { LoginResponse } from "../../types/auth";
import $session from "../../store/session";

const URL = `${import.meta.env.VITE_APP_API_URL}`;
const STORAGE_URL = `${import.meta.env.VITE_APP_STORAGE_URL}`;

export const getApiURL = () => {
  return URL;
};

export const getStorageURL = () => {
  return STORAGE_URL;
};

const DEFAULT_HEADERS: Record<string, string> = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "ngrok-skip-browser-warning": "true",
};

const instance = axios.create({
  baseURL: URL,
  headers: DEFAULT_HEADERS,
});

instance.interceptors.request.use((request) => {
  const tokens = $session.actions.getTokens();
  const jwtToken = tokens?.accessToken || "";
  if (jwtToken) {
    request.headers.Authorization = `Bearer ${jwtToken}`;
  }

  return request;
});

const refreshAuthToken = async (payload: {
  // username: string;
  refreshToken: string;
}) => {
  const { data } = await axios.post(`${URL}/auth/refresh-token`, payload);

  return data as LoginResponse;
};

const refreshTokenLogic = async (callbackRequest: any) => {
  try {
    if (callbackRequest.response.data.code === "expired_token") {
      const tokens = $session.actions.getTokens();

      if (!tokens) {
        return Promise.reject({
          response: {
            data: {
              message: "Please Log in",
            },
          },
        });
      }

      const refreshToken = tokens.refreshToken;

      const data = await refreshAuthToken({
        // username,
        refreshToken,
      })
        .then((data) => data)
        .catch(() => null);

      if (!data) {
        return Promise.reject({
          response: {
            data: {
              type: "session_expired",
              message: "Your session has expired. Please Log in again.",
            },
          },
        });
      }

      $session.actions.setSession({
        id: data.item.id,
        tokens: {
          accessToken: data.item.tokens.accessToken,
          refreshToken: data.item.tokens.refreshToken,
        },
      });

      callbackRequest.response.config.headers["Authorization"] =
        `Bearer ${data.item.tokens.accessToken}`;

      return Promise.resolve();
    } else {
      $session.actions.clearSession();

      return Promise.resolve();
    }
  } catch (error: any) {
    return Promise.reject(error);
  }
};

const options = { statusCodes: [401] };

instance.interceptors.response.use(
  (response) => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    const { response } = error;
    if (response) {
      // Handle specific status codes
      switch (response.status) {
        case 429:
          // Handle bad request
          //   ToastHelper.error("Too many requests");
          // console.error('Bad Request:', response.data.message);
          break;
      }
    } else {
      // Handle errors without a response
      // console.error('Error:', error.message);
    }

    return Promise.reject(error);
  }
);

createAuthRefreshInterceptor(instance, refreshTokenLogic, options);

export const api = instance;
