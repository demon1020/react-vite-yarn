import { FC, useEffect } from "react";

import { HeaderActionsProps } from "./HeaderActions.props";
import $userDetail from "../../../store/session/userDetail";

const HeaderActionsView: FC<HeaderActionsProps> = (props) => {
  return (
    <div className="flex gap-2">
      <div className="form-control text-right">
        <h1 className="text-primary">
          {$userDetail.selectors.useUserDetails()?.firstName}
        </h1>
        <h5>{$userDetail.selectors.useUserDetails()?.email}</h5>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={`${$userDetail.selectors.useUserDetails()?.profile_picture_url ?? "/src/assets/react.svg"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderActionsView;
