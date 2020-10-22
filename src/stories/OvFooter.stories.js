import React from 'react';

import OvFooter from '../OverView/OvFooter';

export default {
  title: 'OverView/OvFooter',
  component: OvFooter,
};

const Template = (args) => <OvFooter {...args} />;

export const small = Template.bind({});
small.args = {
  hidden: true,
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
