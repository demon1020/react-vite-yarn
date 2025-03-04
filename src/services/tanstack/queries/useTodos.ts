import { QueriesOptions, useQuery } from "@tanstack/react-query";
import { queryKeys } from ".";
import { getTodos } from "../tasks";
import { TodoResponse } from "../../../types/auth";

const useTodos = (page: number, options?: QueriesOptions<any, any, any>) => {
  return useQuery<TodoResponse>({
    queryKey: [queryKeys.todos, page],
    queryFn: () => getTodos(page),
    keepPreviousData: true,
    ...options,
  });
};

export default useTodos;
