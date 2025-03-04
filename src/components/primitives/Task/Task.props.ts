import { Todo } from "../../../types/auth";

export type TaskProps = {
  task: Todo;
  toggleTaskStatus: (id: number) => void;
};
