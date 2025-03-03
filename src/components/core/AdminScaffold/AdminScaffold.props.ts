import { ReactNode } from "react";

export type AdminScaffoldProps = {
    header?: {
      title?: string;
      actions?: ReactNode;
    };
    children: ReactNode;
    footer?: ReactNode;
    isLoading?: boolean;
  };
  