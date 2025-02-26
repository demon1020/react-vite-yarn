"use client";

import "react-toastify/dist/ReactToastify.css";

import { QueryClient } from "@tanstack/react-query";
import ToastHelper from "../helpers/toastHelper";

const renderErrorItems = (items: string[]) => {
  return (
    <ul style={{ marginTop: "10px" }}>
      {items?.map((i) => <li key={i}>{i}</li>)}
    </ul>
  );
};

const showErrorToast = (err?: any) => {
  const data = err?.response?.data;

  const message = data?.message ?? err?.message ?? data;

  const validationMessages = data?.validationMessages;

  const error =
    typeof message === "string"
      ? message
      : "Something went wrong with the request";

  const isValidationErr =
    data?.error === "ValidationError" || error === "ValidationError";

  const validationErrors = validationMessages
    ? Object.values(validationMessages)?.map((e: any) => e?.toString())
    : null;

  // let title = "Error";
  let description: React.ReactNode = error;

  if (isValidationErr && validationErrors) {
    // title = "Validation Error";
    description = renderErrorItems(validationErrors);
  }

  ToastHelper.error(description.toString());
};

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error: unknown) => {
        console.log(error);
        showErrorToast(error);
      },
    },
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000 * 5,
    },
  },
});
