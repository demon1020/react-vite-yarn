/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";

import { AuthMiddleWareProps } from "./AuthMiddleWare.props";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../constants/routes";

const AuthMiddleWareView: FC<AuthMiddleWareProps> = ({
  children,
  handleRedirect,
}) => {
  const isAuthenticated = false;
  const navigate = useNavigate();
  useEffect(() => {
    if (handleRedirect) {
      handleRedirect(isAuthenticated);
    } else {
      if (isAuthenticated) {
        navigate(RoutePaths.HOME);
      }
    }
  }, [isAuthenticated]);
  return children;
};

export default AuthMiddleWareView;
