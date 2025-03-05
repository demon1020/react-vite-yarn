import { FC } from "react";

import { LandingPageViewProps } from "./LandingPage.props";
import AuthMiddleWareView from "../../../components/core/AuthMiddleWare";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../constants/routes";
import $session from "../../../store/session";

const LandingPageView: FC<LandingPageViewProps> = () => {
  const isAuthenticated = $session.selectors.useIsAuthenticated();

  const navigate = useNavigate();
  return (
    <AuthMiddleWareView
      handleRedirect={(isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          navigate(RoutePaths.LOGIN);
        } else {
          navigate(RoutePaths.DASHBOARD);
        }
      }}
    >
      <div>LandingPage</div>
    </AuthMiddleWareView>
  );
};

export default LandingPageView;
