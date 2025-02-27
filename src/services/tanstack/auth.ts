import { LoginPayload, RegisterPayload } from "../../types/auth";
import { api } from "./instance";

export type AuthParams = {
  provider: "AppleOAuth" | "GoogleOAuth" | "MicrosoftOAuth";
  state?: string;
};

// export const socialAuth = async (params?: AuthParams) => {
//   const { data } = await api.post("auth/social-login", params);
//   return data;
// };

export const signupUsingEmail = async (params: RegisterPayload) => {
  const { data } = await api.post("/users/add", params);
  return {
    ...data,
    payload: params,
  };
};

export const signInUsingEmail = async (params: LoginPayload) => {
  const { data } = await api.post("/auth/login", params);
  return data;
};

export const fetchUserAuthDetails = async (id: string) => {
  const data = await api.get(`/auth/user/${id}`);
  return data.data;
};

// export const verifyEmail = async (params: {
//   email_verification_token: string;
//   otp: string;
// }) => {
//   const { data } = await api.post(
//     `auth/verify-email/${params.email_verification_token}`,
//     {
//       code: params.otp,
//     },
//   );
//   return data;
// };
