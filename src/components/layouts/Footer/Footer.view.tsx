import React, { FC } from "react";

import { FooterProps } from "./Footer.props";

const FooterView: FC<FooterProps> = ({ companyName }) => {
  return (
    <footer className="footer footer-center text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by
          {` ${companyName}`}
        </p>
      </aside>
    </footer>
  );
};

export default FooterView;
