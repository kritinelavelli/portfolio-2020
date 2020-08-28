import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Home } from "./home";

export default {
  title: "Pages/Home",
  component: Home,
} as Meta;

const Template: Story = (args) => <Home />;

export const Default = Template.bind({});
Default.args = {};
