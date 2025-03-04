import { FC, useEffect, useState } from "react";

import { SettingsProps } from "./Settings.props";
import ToastHelper from "../../../helpers/toastHelper";
import useSettings from "../../../services/tanstack/mutations/useSettings";
import { Form, Formik } from "formik";
import {
  initialSettingsValues,
  settingsValidationSchema,
} from "./Settings.utils";
import PrimaryButton from "../../primitives/PrimaryButton";
import FormikInput from "../../primitives/FormikInput";
import $userDetail from "../../../store/session/userDetail";
import { UserPayload } from "../../../types/auth";

const SettingsView: FC<SettingsProps> = ({}) => {
  const { mutate: settings, isPending: isLoading } = useSettings({
    onSuccess: (data: any) => {
      $userDetail.actions.setUserDetails(data);

      ToastHelper.success(
        `${data.username}'s settings updated in successfully`
      );
    },
  });

  const [initialValues, setInitialValues] = useState<UserPayload>({
    id: "",
    email: "",
    password: "",
    username: "",
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const user = $userDetail.selectors.useUserDetails();
    console.log(user);

    setInitialValues({
      id: user?.id || "",
      email: user?.email || "",
      password: "", // Don't prefill password
      username: user?.username || "",
    });
  }, []);

  return (
    <div className="p-6 bg-base-100  rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={settingsValidationSchema}
        enableReinitialize={true}
        onSubmit={(values) => {
          console.log(values);
          settings(values);
        }}
      >
        <Form>
          <div className="mb-4">
            <label className="block text-gray-600">Username</label>
            <FormikInput name="username" placeholder="Username" />
            {/* {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )} */}
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <FormikInput name="email" placeholder="Email" />
            {/* {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )} */}
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <FormikInput
              type="password"
              name="password"
              placeholder="Password"
            />
            {/* {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )} */}
          </div>

          <div className="flex gap-10">
            <div className="mb-4">
              <label className="block text-gray-600">Theme</label>
              <input
                type="checkbox"
                // checked={theme === "dark"}
                // onClick={toggleTheme}
                className="toggle toggle-primary"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600">Notification</label>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                // checked={notifications === "enabled"}
                // onClick={toggleNotifications}
              />
            </div>
          </div>

          {/* {errors.apiError && (
          <p className="text-red-500 text-sm mb-4">{errors.apiError}</p>
        )} */}

          <PrimaryButton isLoading={isLoading} type="submit">
            Save Changes
          </PrimaryButton>
        </Form>
      </Formik>
    </div>
  );
};

export default SettingsView;
