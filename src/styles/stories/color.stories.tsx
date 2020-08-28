import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import "../color.scss";

export default {
  title: "Styles/Color",
  args: {
    colorBar: {
      width: "300px",
      height: "40px",
      margin: "16px",
      color: "white",
    },
    colors: [
      "var(--text-color-100)",
      "var(--text-color-86)",
      "var(--text-color-71)",
      "var(--text-color-55)",
      "var(--text-color-43)",
      "var(--text-color-16)",
      "var(--primary-color-100)",
      "var(--primary-color-86)",
      "var(--primary-color-71)",
      "var(--primary-color-55)",
      "var(--primary-color-43)",
      "var(--primary-color-16)",
      "var(--secondary-color)",
      "var(--highlight-color)",
      "var(--background-color)",
      "var(--surface-color)",
    ],
  },
} as Meta;

const Template: Story = (args) => {
  const listItems = args.colors.map((item: any) => (
    <div style={{ ...args.colorBar, backgroundColor: item }}>{item}</div>
  ));
  return <div>{listItems}</div>;
};

export const Default = Template.bind({});
Default.args = {};
