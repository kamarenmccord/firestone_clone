import React from 'react';

import Body from '../ft/Body.js';

export default {
  title: 'FirestoneTires/Body',
  component: Body,
};

const Template = (args) => <Body {...args} />;

export const Default = Template.bind({});
Default.args = {
  hidden: true,
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
