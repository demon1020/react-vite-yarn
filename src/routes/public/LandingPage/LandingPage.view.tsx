import { FC } from "react";

import { LandingPageViewProps } from "./LandingPage.props";
import AuthMiddleWareView from "../../../components/core/AuthMiddleWare";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../constants/routes";

const LandingPageView: FC<LandingPageViewProps> = () => {
  const navigate = useNavigate();
  return (
    <AuthMiddleWareView
      handleRedirect={(isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          navigate(RoutePaths.LOGIN);
        } else {
          navigate(RoutePaths.HOME);
        }
      }}
    >
      <div>LandingPage</div>
    </AuthMiddleWareView>
  );
};

export default LandingPageView;
