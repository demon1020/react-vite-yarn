import { FC } from "react";

import { MainContentProps } from "./MainContent.props";

import MainContentView from "./MainContent.view";

const MainContentContainer: FC<MainContentProps> = (props) => {
  return <MainContentView activePage={""} />;
};

export default MainContentContainer;
