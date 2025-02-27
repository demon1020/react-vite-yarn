import { useMutation, MutateOptions } from "@tanstack/react-query";
import { mutationKeys } from ".";
import { LoginPayload } from "../../../types/auth";
import { signInUsingEmail } from "../auth";

const useLogin = (options?: MutateOptions<any, any, any>) => {
  return useMutation({
    mutationKey: [mutationKeys.login],
    mutationFn: (payload: LoginPayload) => signInUsingEmail(payload),
    ...options,
  });
};

export default useLogin;
