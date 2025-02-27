import RegisterView from "./Register.view";
import useRegister from "../../../services/tanstack/mutations/useRegister";
import { RegisterPayload } from "../../../types/auth";
import ToastHelper from "../../../helpers/toastHelper";

const RegisterContainer = () => {
  const onRegister = (values: RegisterPayload) => {
    onRegister(values);
  };

  const { mutate: register, isPending: isRegisterPending } = useRegister({
    onSuccess: (data: any) => {
      console.log(data);
      ToastHelper.success(`${data.username} Register in successfully`);
    },
  });

  return <RegisterView onRegister={register} isPending={isRegisterPending} />;
};

export default RegisterContainer;
