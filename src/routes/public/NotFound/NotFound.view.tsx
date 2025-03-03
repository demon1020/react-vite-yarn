import { FC } from "react";

import { NotFoundViewProps } from "./NotFound.props";
import PrimaryButton from "../../../components/primitives/PrimaryButton";
import { RoutePaths } from "../../../constants/routes";
import { useNavigate } from "react-router-dom";

const NotFoundView: FC<NotFoundViewProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen space-y-8 w-[100vw]">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
          <p className="text-lg mb-8">
            The page you're looking for doesn't exist.
          </p>
        </div>
        <div className="mb-8">
          <PrimaryButton onClick={() => navigate(RoutePaths.DASHBOARD)}>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Go back to Home
            </div>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default NotFoundView;
