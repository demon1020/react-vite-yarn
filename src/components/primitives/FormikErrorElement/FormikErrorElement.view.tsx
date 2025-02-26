import { FC } from "react";

import { FormikErrorElementProps } from "./FormikErrorElement.props";
import { ErrorMessage } from "formik";

const FormikErrorElementView: FC<FormikErrorElementProps> = ({ name }) => {
  return (
    <ErrorMessage
      component="div"
      name={name}
      className="text-red-500 text-md mt-1"
    />
  );
};

export default FormikErrorElementView;
