import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { ActionBar } from "./action-bar";

export default {
  title: "Components/Action Bar",
  component: ActionBar,
} as Meta;

const Template: Story = (args) => (
  <Router>
    <ActionBar />
  </Router>
);

export const Default = Template.bind({});
Default.args = {};
