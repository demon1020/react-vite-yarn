import React, { FC } from "react";

import { AdminScaffoldProps } from "./AdminScaffold.props";
import Sidebar from "../../layouts/Sidebar";
import CircularProgressIndicatorView from "../../primitives/CircularProgressIndicator";

const AdminScaffoldView: FC<AdminScaffoldProps> = ({
  header,
  children,
  footer,
  isLoading = false,
}) => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-1 flex-col w-full h-screen overflow-hidden">
        <header
          className="px-8 py-8 h-16 sticky top-0 flex justify-between items-center z-10"
          style={{
            willChange: "top",
            filter: "drop-shadow(rgba(0, 0, 0, 0.1) 0 2px 2px)",
          }}
        >
          <div>
            <h1 className="lg:text-3xl font-bold text-primary md:text-2xl text-xl">
              {header?.title ?? ""}
            </h1>
          </div>
          <div>{header?.actions}</div>
        </header>
        <div className="overflow-y-auto scroll-smooth h-full">
          {isLoading ? <CircularProgressIndicatorView /> : children}
        </div>
        {footer && (
          <footer
            style={{
              filter: "drop-shadow(rgba(0, 0, 0, 0.1) 0 -2px 2px)",
            }}
            className="bg-white h-[100px] w-full bottom-0 p-4"
          >
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
};

export default AdminScaffoldView;
