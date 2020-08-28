import React from "react";
import "./main-nav.scss";
import { useRouteMatch, Link } from "react-router-dom";
import { Tabs, Tab } from "../tabs/tabs";

export const MainNav: React.FC = () => {
  return (
    <Tabs>
      <Tab active={useRouteMatch({ path: "/", exact: true })}>
        <Link className="link" to="/">
          Home
        </Link>
      </Tab>
      <Tab active={useRouteMatch({ path: "/process" })}>
        <Link className="link" to="/process">
          Process
        </Link>
      </Tab>
      <Tab active={useRouteMatch({ path: "/about" })}>
        <Link className="link" to="/about">
          About
        </Link>
      </Tab>
    </Tabs>
  );
};
