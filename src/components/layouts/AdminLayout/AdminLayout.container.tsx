import { FC } from "react";

import { AdminLayoutProps } from "./AdminLayout.props";

import AdminLayoutView from "./AdminLayout.view";
import { useNavigate } from "react-router-dom";
import AuthMiddleWare from "../../core/AuthMiddleWare";
import { RoutePaths } from "../../../constants/routes";

const AdminLayoutContainer: FC<AdminLayoutProps> = (props) => {
  const navigate = useNavigate();
  return (
    <AuthMiddleWare
      handleRedirect={(isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          navigate(RoutePaths.LOGIN);
        }
      }}
    >
      <AdminLayoutView />
    </AuthMiddleWare>
  );
};

export default AdminLayoutContainer;
