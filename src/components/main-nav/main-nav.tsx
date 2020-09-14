import React from "react";
import "./main-nav.scss";
import { useRouteMatch, Link } from "react-router-dom";
import { Tabs, Tab } from "../tabs/tabs";

export const MainNav: React.FC = () => {
  return (
    <Tabs>
      <Tab active={useRouteMatch({ path: "/", exact: true })}>
        <Link className="main-nav-link" to="/">
          Home
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
