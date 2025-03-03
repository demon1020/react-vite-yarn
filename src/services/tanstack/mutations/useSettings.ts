import { MutateOptions, useMutation } from "@tanstack/react-query";
import { mutationKeys } from ".";
import { updateUser } from "../tasks";
import { UserPayload } from "../../../types/auth";

const useSettings = (options?: MutateOptions<any, any, any>) => {
  return useMutation({
    mutationKey: [mutationKeys.settings],
    mutationFn: (payload: UserPayload) => updateUser(payload),
    ...options,
  });
};

export default useSettings;
