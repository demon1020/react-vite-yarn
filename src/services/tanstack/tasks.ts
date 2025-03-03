import { UserPayload } from "../../types/auth";
import { api } from "./instance";

export const getTodos = async () => {
  const { data } = await api.get("/todos");
  return {
    ...data,
  };
};

export const updateUser = async (params: UserPayload) => {
  const { data } = await api.put(`/users/${params.id}`, params);
  return {
    ...data,
    payload: params,
  };
};
