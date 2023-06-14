import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './button';
import { ButtonProps } from './button.types';
import Icon from '../icon/icon';

export default {
  title: 'Base/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (
  args: ButtonProps
): JSX.Element => <Button {...args}></Button>;
export const Primary: ComponentStory<FC<ButtonProps>> = Template.bind({});
export const Secondary: ComponentStory<FC<ButtonProps>> = Template.bind({});

Primary.args = {
  color: 'white',
  fillColor: 'green',
  onClick: () => console.log('Clicked'),
  children: <span>click here</span>,
};

Secondary.args = {
  color: 'white',
  fillColor: 'green',
  onClick: () => console.log('Clicked'),
  children: <Icon name="group" fill="white" />,
};
