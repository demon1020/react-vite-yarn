import { MutateOptions, useMutation } from "@tanstack/react-query";
import { mutationKeys } from ".";
import { getTodos } from "../tasks";

const useTodos = (options?: MutateOptions<any, any, any>) => {
  return useMutation({
    mutationKey: [mutationKeys.todos],
    mutationFn: () => getTodos(),
    ...options,
  });
};

export default useTodos;
