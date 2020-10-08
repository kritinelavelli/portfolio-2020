import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Hvz } from "./hvz";

export default {
  title: "Pages/Hvz",
  component: Hvz,
} as Meta;

const Template: Story = () => <Hvz />;

export const Default = Template.bind({});
Default.args = {};
