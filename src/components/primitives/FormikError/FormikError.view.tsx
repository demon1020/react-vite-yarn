import { FC } from "react";

import { FormikErrorProps } from "./FormikError.props";
import { ErrorMessage } from "formik";

const FormikErrorView: FC<FormikErrorProps> = ({ name }) => {
  return (
    <ErrorMessage
      component="div"
      className="text-red-500 text-sm mt-2"
      name={name}
    />
  );
};

export default FormikErrorView;
