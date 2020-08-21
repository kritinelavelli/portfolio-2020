import React from "react";
import { Link } from "react-router-dom";

export const Tabs: React.FC = () => {
  const items = ["Home", "About", "Process"];
  const listItems = items.map((item) => (
    <li>
      <Link to={"/" + item.toLowerCase()}>{item}</Link>
    </li>
  ));
  return <ul>{listItems}</ul>;
};
