import { FC } from "react";

import { RegisterViewProps } from "./Register.props";
import MainView from "../../../components/core/Main/Main.view";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../constants/routes";
import { Form, Formik } from "formik";
import { initialRegistrationData, registrationSchema } from "./Register.utils";
import FormikInput from "../../../components/primitives/FormikInput";
import PrimaryButton from "../../../components/primitives/PrimaryButton";

const RegisterView: FC<RegisterViewProps> = ({ onRegister, isPending }) => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate(RoutePaths.LOGIN);
  };

  return (
    <MainView>
      <div className="flex items-center justify-center min-h-screen">
        <div className="card w-96 bg-base-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
          <Formik
            initialValues={initialRegistrationData}
            validationSchema={registrationSchema}
            onSubmit={(values) => {
              console.log(values);
              onRegister && onRegister(values);
              goToLogin();
            }}
          >
            <Form>
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <FormikInput
                  name="firstName"
                  placeholder="Enter your first name"
                />
              </div>

              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <FormikInput
                  name="lastName"
                  placeholder="Enter your last name"
                />
              </div>

              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <FormikInput
                  name="username"
                  placeholder="Enter your username"
                />
              </div>

              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <FormikInput
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <FormikInput
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>

              <PrimaryButton isLoading={isPending} type="submit">
                Register
              </PrimaryButton>
            </Form>
          </Formik>

          <div className="text-center mt-2">
            <span className="text-gray-600">Already have an account? </span>
            <button onClick={goToLogin} className="text-blue-500">
              Login
            </button>
          </div>
        </div>
      </div>
    </MainView>
  );
};

export default RegisterView;
