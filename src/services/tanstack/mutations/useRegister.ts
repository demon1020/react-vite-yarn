import { MutateOptions, useMutation } from "@tanstack/react-query";
import { mutationKeys } from ".";
import { RegisterPayload } from "../../../types/auth";
import { signupUsingEmail } from "../auth";

const useRegister = (options?: MutateOptions<any, any, any>) => {
  return useMutation({
    mutationKey: [mutationKeys.register],
    mutationFn: (payload: RegisterPayload) => signupUsingEmail(payload),
    ...options,
  });
};

export default useRegister;
