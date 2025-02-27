import { api } from "./instance";

export const getTodos = async () => {
  const { data } = await api.get("/todos");
  return {
    ...data,
  };
};
