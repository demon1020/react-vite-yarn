import { LoginPayload, UserPayload } from "../../../types/auth";
import * as Yup from "yup";

export const initialSettingsValues: UserPayload = {
  email: "",
  username: "",
  password: "",
  id: "2",
};

export const settingsValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  username: Yup.string().required("username name is required"),
  id: Yup.string().required("id is is required"),
});
