import { FC } from "react";

import { LinkProps } from "./Link.props";

const LinkView: FC<LinkProps> = ({ onClick, children, ...props }) => {
  return (
    <a
      {...props}
      onClick={() => onClick && onClick()}
      className="text-primary font-bold text-center text-md mt-4 cursor-pointer">
      {children}
    </a>
  );
};

export default LinkView;
