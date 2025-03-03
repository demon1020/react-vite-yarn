import React, { FC } from "react";

import { SettingsProps } from "./Settings.props";
import useTodos from "../../../services/tanstack/mutations/useTasks";
import ToastHelper from "../../../helpers/toastHelper";
import useSettings from "../../../services/tanstack/mutations/useSettings";
import { Form, Formik } from "formik";
import {
  initialSettingsValues,
  settingsValidationSchema,
} from "./Settings.utils";
import PrimaryButton from "../../primitives/PrimaryButton";
import FormikInput from "../../primitives/FormikInput";

const SettingsView: FC<SettingsProps> = ({}) => {
  // const onTodos = (values: LoginPayload) => {
  //     todos(values);
  //   };

  const { mutate: settings, isPending: isLoading } = useSettings({
    onSuccess: (data: any) => {
      ToastHelper.success(
        `${data.username}'s settings updated in successfully`
      );
    },
  });
  return (
    <div className="p-6 bg-base-100  rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <Formik
        initialValues={initialSettingsValues}
        validationSchema={settingsValidationSchema}
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
