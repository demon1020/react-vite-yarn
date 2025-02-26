import { FC } from "react";

import { BlurCardProps } from "./BlurCard.props";

const BlurCardView: FC<BlurCardProps> = ({ children, ...props }) => {
  return (
    <div {...props}>
      <div
        style={
          {
            // background: "rgba(255, 255, 255, 0.6)",
            // backdropFilter: "blur(20px)",
            // filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))",
          }
        }
        className="bg-white p-8 rounded-md shadow-md">
        {children}
      </div>
    </div>
  );
};

export default BlurCardView;
