import { FC } from "react";

import { DashboardViewProps } from "./Dashboard.props";
import AdminScaffold from "../../../components/core/AdminScaffold";

const DashboardView: FC<DashboardViewProps> = (props) => (
  <AdminScaffold header={{ title: "Dashboard" }}>
    <div className="flex">Dashboard</div>
  </AdminScaffold>
);

export default DashboardView;
