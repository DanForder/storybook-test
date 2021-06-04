import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'GE/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: 'secondary',
  label: 'Secondary',
};

export const Black = Template.bind({});
Black.args = {
  buttonType: 'black',
  label: 'Black',
};
