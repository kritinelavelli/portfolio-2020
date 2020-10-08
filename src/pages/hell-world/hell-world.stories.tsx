import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { HellWorld } from "./hell-world";

export default {
  title: "Pages/HellWorld",
  component: HellWorld,
} as Meta;

const Template: Story = () => <HellWorld />;

export const Default = Template.bind({});
Default.args = {};
