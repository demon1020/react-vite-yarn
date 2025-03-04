import { FC } from "react";

import { AdminLayoutViewProps } from "./AdminLayout.props";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayoutView: FC<AdminLayoutViewProps> = (props) => {
  return (
    <div className="flex h-screen overflow-hidden min-w-[100vw]">
      <Sidebar />
      <main className="flex-1 w-full overflow-y-auto bg-[#F7FAFB] ">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayoutView;
