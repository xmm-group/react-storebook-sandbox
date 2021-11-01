import React from 'react';

import Button from '.';

export default {
  title: 'Base components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  children: 'Success button',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  children: 'Warning button',
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  children: 'Danger button',
};

export const Muted = Template.bind({});
Muted.args = {
  type: 'muted',
  children: 'Muted button',
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  children: 'Loading button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled button',
};

export const Block = Template.bind({});
Block.args = {
  block: true,
  children: 'Block button',
};