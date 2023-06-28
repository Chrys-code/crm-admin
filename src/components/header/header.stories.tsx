import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './header';
import { HeaderProps } from './header.types';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    //Write arg types for documentation
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (
  args: HeaderProps
): JSX.Element => <Header {...args}>Click here</Header>;
export const Primary: ComponentStory<FC<HeaderProps>> = Template.bind({});
Primary.args = {};
