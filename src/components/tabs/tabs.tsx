import React from "react";
import "./tabs.scss";

export const Tabs: React.FC<any> = (props) => {
  return <div className="tabs">{props.children}</div>;
};

export const Tab: React.FC<any> = (props: any) => {
  return (
    <h6 className={props.active ? "tabs-tab active" : "tabs-tab"}>
      {props.children}
    </h6>
  );
};
