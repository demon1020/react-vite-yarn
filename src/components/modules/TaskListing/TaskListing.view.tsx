import React, { FC } from "react";

import { TaskListingProps } from "./TaskListing.props";
import TaskView from "../../primitives/Task";

const TaskListingView: FC<TaskListingProps> = (props) => {
  return (
    <div className="p-6 bg-base-100  rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <TaskView
        task={{
          id: 0,
          todo: "title",
          completed: false,
          dueDate: "tommorrow",
        }}
        toggleTaskStatus={function (id: number): void {
          throw new Error("Function not implemented.");
        }}
      />
      <TaskView
        task={{
          id: 0,
          todo: "title",
          completed: false,
          dueDate: "tommorrow",
        }}
        toggleTaskStatus={function (id: number): void {
          throw new Error("Function not implemented.");
        }}
      />
      <TaskView
        task={{
          id: 0,
          todo: "title",
          completed: false,
          dueDate: "tommorrow",
        }}
        toggleTaskStatus={function (id: number): void {
          throw new Error("Function not implemented.");
        }}
      />

      <div className="w-full flex items-center justify-between mt-10">
        <button
          className="btn btn-outline flex-1 mx-2"
          // onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          // disabled={page === 0}
        >
          « Previous
        </button>

        <span className="flex-1 text-center font-semibold">
          {/* Page {skip === 0 ? 1 : (skip / 3).toFixed()} of ( */}
          {/* {(total / 3).toFixed(0)}) */}
        </span>

        <button
          className="btn btn-outline flex-1 mx-2"
          // onClick={() => setPage((prev) => prev + 1)}
          // disabled={skip + 3 >= total}
        >
          Next »
        </button>
      </div>
    </div>
  );
};

export default TaskListingView;
