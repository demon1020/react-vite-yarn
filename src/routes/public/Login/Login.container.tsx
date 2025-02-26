import { useNavigate } from "react-router-dom";
import LoginView from "./Login.view";
import { RoutePaths } from "../../../constants/routes";
import useLogin from "../../../services/tanstack/mutations/useLogin";
import $session from "../../../store/session";
import $userDetail from "../../../store/session/userDetail";
import { LoginPayload } from "../../../types/auth";
import ToastHelper from "../../../helpers/toastHelper";

const LoginContainer = () => {
  const navigate = useNavigate();

  const onLogin = (values: LoginPayload) => {
    login(values);
  };

  const { mutate: login, isPending: isLoginLoading } = useLogin({
    onSuccess: (data: any) => {
      $session.actions.setSession({
        tokens: {
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        },
        id: data.id,
      });
      $userDetail.actions.setUserDetails(data);
      navigate(RoutePaths.HOME);
      ToastHelper.success(`${data.username} logged in successfully`);
    },
  });

  return <LoginView onLogin={onLogin} isLoading={isLoginLoading} />;
};

export default LoginContainer;
