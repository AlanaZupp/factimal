import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LogoIcon } from "../libs/ui/logo-icon/LogoIcon";

export default {
  title: "UI/LogoIcon",
  component: LogoIcon,
} as ComponentMeta<typeof LogoIcon>;

const Template: ComponentStory<typeof LogoIcon> = (args) => (
  <LogoIcon {...args} />
);

export const Primary = Template.bind({});
