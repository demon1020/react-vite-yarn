import { FC } from "react";

import { MainContentViewProps } from "./MainContent.props";
import TaskListing from "../../modules/TaskListing";
import Settings from "../../modules/Settings";

const MainContentView: FC<MainContentViewProps> = ({ activePage }) => {
  const renderContent = () => {
    switch (activePage) {
      case "Settings":
        return <Settings />;
      case "Task Listings":
        return <TaskListing />;
      default:
        return <div>Welcome to the Dashboard</div>;
    }
  };

  return <div className="w-full h-full m-10">{renderContent()}</div>;
};

export default MainContentView;
