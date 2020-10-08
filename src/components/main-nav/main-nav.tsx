import React from "react";
import "./main-nav.scss";
import { useRouteMatch } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { Tabs, Tab } from "../tabs/tabs";

export const MainNav: React.FC = () => {
  return (
    <Tabs>
      <Tab active={useRouteMatch({ path: "/#projects", exact: true })}>
        <Link className="main-nav-link" smooth to="/#projects">
          Projects
        </Link>
      </Tab>
      <Tab active={useRouteMatch({ path: "/process" })}>
        <Link className="main-nav-link" to="/process">
          Process
        </Link>
      </Tab>
      <Tab active={useRouteMatch({ path: "/about" })}>
        <Link className="main-nav-link" to="/about">
          About
        </Link>
      </Tab>
    </Tabs>
  );
};
