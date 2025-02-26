import { ButtonHTMLAttributes } from "react";

export type PrimaryButtonProps = {
  children?: React.ReactNode;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
