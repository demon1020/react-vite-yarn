import { FC } from "react";

import { CircularProgressIndicatorProps } from "./CircularProgressIndicator.props";

const CircularProgressIndicatorView: FC<
  CircularProgressIndicatorProps
> = () => {
  return (
    <div className="flex justify-center items-center h-48">
      <Spinner />
    </div>
  );
};

export const Spinner = () => {
  return <span className="loading loading-ring loading-md"></span>;
};

export default CircularProgressIndicatorView;
