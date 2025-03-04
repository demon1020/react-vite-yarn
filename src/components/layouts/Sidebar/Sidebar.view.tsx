import React, { FC } from "react";

import { SidebarProps } from "./Sidebar.props";
import { Settings, ListTodoIcon } from "lucide-react";
import ConfirmModalView from "../../primitives/ConfirmModal";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../constants/routes";

const SidebarView: FC<SidebarProps> = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("ULTISELL-USER-DETAIL");
    localStorage.removeItem("ULTISELL-SESSION");
    navigate(RoutePaths.LOGIN);
  };

  return (
    <div className="w-64 text-white p-5  h-full">
      {/* <h2 className="text-xl font-bold mb-5 text-center">Dashboard</h2> */}
      <ul className="space-y-3">
        <li
          className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 `}
          onClick={() => navigate(RoutePaths.TODOS)}
        >
          <div className="flex items-start space-x-2 ">
            <ListTodoIcon className="h-5 w-5" /> <span>Task Listings</span>
          </div>
        </li>
        <li
          className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300`}
          onClick={() => navigate(RoutePaths.SETTINGS)}
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
          onConfirm={handleLogout}
          onCancel={() => {}}
        />
      </div>
    </div>
  );
};

export default SidebarView;
