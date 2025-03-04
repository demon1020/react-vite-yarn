import { FC, useState } from "react";

import { TaskListingProps } from "./TaskListing.props";
import TaskView from "../../primitives/Task";
import useTodos from "../../../services/tanstack/queries/useTodos";

const TaskListingView: FC<TaskListingProps> = (props) => {
  const [page, setPage] = useState(1); // Track current page state

  const { data, isPending: isLoading } = useTodos(page);

  console.log(!isLoading && data.skip);

  return (
    <div className="p-6 bg-base-100  rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>

      {!isLoading && data.todos.length === 0 && <p>No tasks found.</p>}

      {!isLoading && (
        <ul className="space-y-4">
          {data.todos.map((todo) => (
            <TaskView
              key={todo.id}
              task={todo}
              toggleTaskStatus={function (id: number): void {
                throw new Error("Function not implemented.");
              }}
            />
          ))}
        </ul>
      )}

      <div className="w-full flex items-center justify-between mt-10">
        <button
          className="btn btn-outline flex-1 mx-2"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          // disabled={page === 0}
        >
          « Previous
        </button>

        {!isLoading && (
          <span className="flex-1 text-center font-semibold">
            Page {page} of ({(data.total / 3).toFixed(0)})
          </span>
        )}

        <button
          className="btn btn-outline flex-1 mx-2"
          onClick={() =>
            setPage((prev) =>
              data?.total ? Math.min(prev + 1, data.total) : prev
            )
          }
          // disabled={data.skip + 3 >= data.total}
        >
          Next »
        </button>
      </div>
    </div>
  );
};

export default TaskListingView;
