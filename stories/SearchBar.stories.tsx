import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SearchBar } from "../libs/feature/search-bar/SearchBar";

export default {
  title: "Feature/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Primary = Template.bind({});
