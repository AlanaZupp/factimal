import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TitleImg } from "../libs/feature/title-img/TitleImg";
import { QueryClientStorybookDecorator } from "./assets/queryClientDecorator";

export default {
  title: "Feature/TitleImg",
  component: TitleImg,
  decorators: [
    QueryClientStorybookDecorator,
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof TitleImg>;

const Template: ComponentStory<typeof TitleImg> = (args) => (
  <TitleImg {...args} />
);

export const Primary = Template.bind({});
