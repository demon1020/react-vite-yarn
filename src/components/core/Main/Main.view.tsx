import { FC } from "react";

import { MainViewProps } from "./Main.props";

const MainView: FC<MainViewProps> = ({ header, children }) => {
  return (
    <div className="m-10 relative h-[100vh]">
      <div className="absolute w-[100vw] top-0 z-10">{header}</div>
      <div className={`${header ? "pt-16" : ""} h-full overflow-y-scroll`}>
        {children}
      </div>
    </div>
  );
};

export default MainView;
