import { InputHTMLAttributes } from "react";

export type FormikInputProps = {
  name: string;
  placeholder: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  label?: string;
  options?: React.InputHTMLAttributes<HTMLInputElement>;
};
