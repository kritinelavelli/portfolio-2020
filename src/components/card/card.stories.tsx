import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Card } from "./card";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: Story = (args) => (
  <Card
    imageSrc="https://via.placeholder.com/150"
    title="Title Title Title"
    description="I partnered with three project managers and one other lead designer
    to uncover insights and translate concepts into features that
    address customer behaviours and motivations."
  />
);

export const Default = Template.bind({});
Default.args = {};
