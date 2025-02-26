import { LoginPayload } from "../../../types/auth";

/* eslint-disable @typescript-eslint/no-empty-object-type */
export type LoginProps = {};

export type LoginViewProps = {
  onLogin: (values: LoginPayload) => void;
  isLoading: boolean;
};
