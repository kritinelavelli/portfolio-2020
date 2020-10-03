import React from "react";
import "./action-bar.scss";
import { MainNav } from "../main-nav/main-nav";
import logo from "../../assets/logooutline.png";

export const ActionBar: React.FC = () => {
  return (
    <div className="action-bar">
      <header className="action-bar-header">
        <img src={logo} className="action-bar-logo" alt="logo" />
        <MainNav />
      </header>
    </div>
  );
};
