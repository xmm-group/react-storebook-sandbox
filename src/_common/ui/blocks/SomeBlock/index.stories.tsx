/* eslint-disable react/jsx-props-no-spreading,react/destructuring-assignment */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import SomeBlock, { SomeBlockPropsTypes } from '.';

export default {
  title: 'Block components/SomeBlock',
  component: SomeBlock,
} as Meta;

const Template: Story<SomeBlockPropsTypes> = (args) => <SomeBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Some text in block',
};
