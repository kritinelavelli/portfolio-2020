import React from "react";
import "./action-bar.scss";
import { MainNav } from "../main-nav/main-nav";
import logo from "../../logooutline.png";

export const ActionBar: React.FC = () => {
  return (
    <div className="action-bar">
      <img src={logo} className="action-bar-logo" alt="logo" />
      <MainNav />
    </div>
  );
};
