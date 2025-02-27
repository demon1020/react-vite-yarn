export type TaskProps = {
  task: {
    id: number;
    todo: string;
    completed: boolean;
    dueDate: string;
  };
  toggleTaskStatus: (id: number) => void;
};
