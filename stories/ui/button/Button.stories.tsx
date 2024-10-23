import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: "My Button",
    size: "xlg",
    variant: "info", // Change to different variants and check
    type: "normal",
    display: "block",
  },
};
export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
    variant: "info",
  },
};
