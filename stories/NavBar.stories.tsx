import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NavBar } from "../libs/feature/nav-bar/NavBar";

export default {
  title: "Feature/NavBar",
  component: NavBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
