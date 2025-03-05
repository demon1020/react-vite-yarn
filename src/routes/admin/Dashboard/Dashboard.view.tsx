import { FC } from "react";

import { DashboardViewProps } from "./Dashboard.props";
import AdminScaffold from "../../../components/core/AdminScaffold";
import HeaderActions from "../../../components/layouts/HeaderActions";
import Footer from "../../../components/layouts/Footer";

const DashboardView: FC<DashboardViewProps> = (props) => (
  <AdminScaffold
    header={{ title: "Dashboard", actions: <HeaderActions /> }}
    footer={<Footer companyName={"Technovation Pvt. Ltd."} />}
  >
    <div className="flex">Dashboard</div>
  </AdminScaffold>
);

export default DashboardView;
