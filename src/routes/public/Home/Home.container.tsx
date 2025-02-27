import React, { useState } from "react";

import { HomeProps } from "./Home.props";

import HomeView from "./Home.view";

const HomeContainer = ({}) => {
  const [activePage, setActivePage] = useState("Task Listings");

  return <HomeView activePage={activePage} setActivePage={setActivePage} />;
};

export default HomeContainer;
