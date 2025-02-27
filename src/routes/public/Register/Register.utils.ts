import { RegisterPayload } from "../../../types/auth";

import * as Yup from "yup";

export const initialRegistrationData: RegisterPayload = {
  username: "",
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

export const registrationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  username: Yup.string().required("Username is required"),
});
