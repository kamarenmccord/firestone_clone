import React from 'react';

import OvHeader from '../OverView/OvHeader';

export default {
  title: 'OverView/OvHeader',
  component: OvHeader,
};

const Template = (args) => <OvHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
