import { forwardRef } from "react";
import { PrimaryButtonProps } from "./PrimaryButton.props";
import { Spinner } from "../CircularProgressIndicator/CircularProgressIndicator.view";

const PrimaryButtonView = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  (
    { children, isLoading, disabled, className, type = "button", onClick },
    ref,
  ) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        type={type}
        ref={ref}
        className={`btn btn-sm lg:btn-md btn-primary border-2 text-white px-8 font-bold ${isLoading ? "animate-pulse pointer-events-none" : ""} ${className}`}>
        {isLoading ? <Spinner /> : children}
      </button>
    );
  },
);
export default PrimaryButtonView;
