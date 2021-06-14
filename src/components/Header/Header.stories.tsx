import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Header, HeaderProps } from './Header';

export default {
  title: 'GE/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  isLoggedIn: true,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  isLoggedIn: false,
};
