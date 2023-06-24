import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './icon';
import { IconProps } from './icon.types';

export default {
  title: 'Base/Icon',
  component: Icon,
  argTypes: {
    //Write arg types for documentation
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (
  args: IconProps
): JSX.Element => <Icon {...args}>Click here</Icon>;
export const Primary: ComponentStory<FC<IconProps>> = Template.bind({});
Primary.args = {
  name: 'group',
  size: 'large',
  background: true,
};
