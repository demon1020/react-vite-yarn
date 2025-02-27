import { RegisterPayload } from "../../../types/auth";

export type RegisterProps = {};

export type RegisterViewProps = {
  onRegister: (payload: RegisterPayload) => void;
  isPending: boolean;
};
