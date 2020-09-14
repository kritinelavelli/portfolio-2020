import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { CardGrid } from "./card-grid";

export default {
  title: "Components/Card Grid",
  component: CardGrid,
} as Meta;

const Template: Story = (args) => <CardGrid />;

export const Default = Template.bind({});
Default.args = {};
