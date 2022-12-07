import React from "react";
import "./MainLayouts.css"

type Props = {
  children?: JSX.Element;
};

const MainLayouts = ({ children }: Props) => (
    <div className="main-layout">
      {children}
    </div>
  );

export default MainLayouts;
