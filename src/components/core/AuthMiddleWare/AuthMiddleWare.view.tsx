/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";

import { AuthMiddleWareProps } from "./AuthMiddleWare.props";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../constants/routes";
import $session from "../../../store/session";

const AuthMiddleWareView: FC<AuthMiddleWareProps> = ({
  children,
  handleRedirect,
}) => {
  const isAuthenticated = $session.selectors.useIsAuthenticated();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate(RoutePaths.DASHBOARD);
    }

    if (handleRedirect) {
      handleRedirect(isAuthenticated);
    }
  }, [isAuthenticated]);
  return children;
};

export default AuthMiddleWareView;
