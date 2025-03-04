import { TodoResponse, UserPayload } from "../../types/auth";
import { api } from "./instance";

export const getTodos = async (page: number): Promise<TodoResponse> => {
  const limit = 3; // Number of items per page
  const skip = (page - 1) * limit; // Calculate the skip value
  const { data } = await api.get<TodoResponse>(
    `/todos?skip=${skip}&limit=${limit}`
  );
  return data;
};

export const updateUser = async (params: UserPayload) => {
  const { data } = await api.put(`/users/${params.id}`, params);
  return {
    ...data,
    payload: params,
  };
};
