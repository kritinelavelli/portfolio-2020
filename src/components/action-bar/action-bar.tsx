import React from "react";
import "./action-bar.scss";
import { MainNav } from "../main-nav/main-nav";
import logo from "../../assets/logooutline.png";
import { Link } from "react-router-dom";

export const ActionBar: React.FC = () => {
  return (
    <div className="action-bar">
      <header className="action-bar-header">
        <Link to="/">
          <img src={logo} className="action-bar-logo" alt="logo" />
        </Link>
        <MainNav />
      </header>
    </div>
  );
};
