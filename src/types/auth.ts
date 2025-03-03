import { BaseResponse } from "./common";

export type LoginPayload = {
  username: string;
  password: string;
};

export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type User = {
  object: string;
  id: string;
  email: string;
  email_verified: boolean;
  firstName: string;
  lastName: string;
  profile_picture_url: string | null;
  email_verification_token: string;
  pending_authentication_token: string | null;
  created_at: string;
  updated_at: string;
  status: string;
};

export type UserPayload = {
  id: string;
  email: string;
  password: string;
  username: string;
};

export type EmailVerificationTokens = {
  email_verification_token: string;
  pending_authentication_token: string;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type LoginResponse = BaseResponse<User & { tokens: Tokens }>;
