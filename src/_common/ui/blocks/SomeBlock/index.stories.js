import React from 'react';

import SomeBlock from '.';

export default {
  title: 'Block components/SomeBlock',
  component: false,
};

const Template = (args) => <SomeBlock {...args} />;

export const Default = Template.bind({});
Default.args = {};