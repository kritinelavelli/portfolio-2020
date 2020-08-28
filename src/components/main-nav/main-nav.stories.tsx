import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { MainNav } from "./main-nav";

export default {
  title: "Components/Main Nav",
  component: MainNav,
} as Meta;

const Template: Story = (args) => (
  <Router>
    <MainNav />
  </Router>
);

export const Default = Template.bind({});
Default.args = {};
