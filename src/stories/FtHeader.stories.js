import React from 'react';

import Header from '../ft/Header.js';

export default {
  title: 'FirestoneTires/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
};

