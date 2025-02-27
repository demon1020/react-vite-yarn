import { FC } from "react";

import { HomeViewProps } from "./Home.props";
import MainView from "../../../components/core/Main/Main.view";
import SidebarView from "../../../components/layouts/Sidebar";
import HeaderView from "../../../components/layouts/Header";
import FooterView from "../../../components/layouts/Footer";
import MainContentView from "../../../components/layouts/MainContent/MainContent.view";

const HomeView: FC<HomeViewProps> = ({ activePage, setActivePage }) => (
  <MainView>
    <div className="flex flex-col h-screen">
      <div>
        <HeaderView
          firstName={"Ram Nabik"}
          email={"ram@gmail.com"}
          image={
            "https://4kwallpapers.com/images/wallpapers/sung-jinwoo-8k-6016x3384-14673.jpg"
          }
        />
      </div>
      <div className="flex flex-1">
        <div className="w-1/5">
          <SidebarView
            activePage={""}
            logout={function (): void {
              throw new Error("Function not implemented.");
            }}
            setActivePage={setActivePage}
          ></SidebarView>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <MainContentView activePage={activePage} />
        </div>
      </div>
      <div>
        <FooterView companyName={"Innovation Pvt. Ltd."} />
      </div>
    </div>
  </MainView>
);

export default HomeView;
