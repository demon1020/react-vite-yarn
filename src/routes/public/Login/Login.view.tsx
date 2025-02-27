import { FC } from "react";

import { LoginViewProps } from "./Login.props";
import MainView from "../../../components/core/Main/Main.view";
import { Form, Formik } from "formik";
import { initialLoginValues, loginValidationSchema } from "./Login.utils";
import { Link, useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../constants/routes";
import FormikInput from "../../../components/primitives/FormikInput";
import PrimaryButton from "../../../components/primitives/PrimaryButton";

const LoginView: FC<LoginViewProps> = ({ onLogin, isLoading }) => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate(RoutePaths.REGISTER); //TODO: add register route here
  };

  return (
    <MainView>
      <div className="flex items-center justify-center min-h-screen">
        <div className="card w-96 bg-base-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <Formik
            initialValues={initialLoginValues}
            validationSchema={loginValidationSchema}
            onSubmit={(values) => {
              console.log(values);
              onLogin && onLogin(values);
            }}
          >
            <Form>
              <div className="flex flex-col p-4 gap-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="col-span-1">
                    <FormikInput name="username" placeholder="Username" />
                  </div>

                  <div className="col-span-1">
                    <FormikInput
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <PrimaryButton
                  isLoading={isLoading}
                  type="submit"
                  className="mt-4"
                >
                  Login
                </PrimaryButton>
                <a className="text-secondary font-bold text-center text-md">
                  Forgot Password?
                </a>
                <div className="divider text-sm">OR</div>

                <Link className="cursor-text" onClick={goToRegister} to={""}>
                  You don't have an account?{" "}
                  <span className="text-secondary">Create one here</span>
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </MainView>
  );
};

export default LoginView;
