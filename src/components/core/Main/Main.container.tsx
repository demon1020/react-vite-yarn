import { FC } from 'react';

import { MainProps } from './Main.props';

import MainView from './Main.view';

const MainContainer: FC<MainProps> = (props) => {
  return <MainView />;
};

export default MainContainer;
