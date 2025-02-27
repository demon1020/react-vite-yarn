import React, { FC } from "react";

import { SidebarProps } from "./Sidebar.props";
import { Settings, ListTodoIcon } from "lucide-react";
import ConfirmModalView from "../../primitives/ConfirmModal";

const SidebarView: FC<SidebarProps> = ({
  activePage,
  logout,
  setActivePage,
}) => {
  return (
    <div className="w-64 text-white p-5  h-full">
      {/* <h2 className="text-xl font-bold mb-5 text-center">Dashboard</h2> */}
      <ul className="space-y-3">
        <li
          className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 ${
            activePage === "Task Listings"
              ? "bg-primary text-white"
              : "hover:bg-primary"
          }`}
          onClick={() => setActivePage("Task Listings")}
        >
          <div className="flex items-start space-x-2 ">
            <ListTodoIcon className="h-5 w-5" /> <span>Task Listings</span>
          </div>
        </li>
        <li
          className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 ${
            activePage === "Settings"
              ? "bg-primary text-white"
              : "hover:bg-primary"
          }`}
          onClick={() => setActivePage("Settings")}
        >
          <div className="flex items-start space-x-2 ">
            <Settings className="h-5 w-5" /> <span>Settings</span>
          </div>
        </li>
      </ul>

      <div className="mt-4">
        <ConfirmModalView
          title="Logout"
          message="Are you sure you want to log out?"
          confirmText="Confirm Logout"
          cancelText="Cancel"
          onConfirm={logout}
          onCancel={() => {}}
        />
      </div>
    </div>
  );
};

export default SidebarView;
