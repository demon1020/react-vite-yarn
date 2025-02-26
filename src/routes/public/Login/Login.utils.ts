import { LoginPayload } from "../../../types/auth";
import * as Yup from "yup";

export const initialLoginValues: LoginPayload = {
  username: "",
  password: "",
};

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
