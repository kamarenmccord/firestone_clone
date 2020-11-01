import React from 'react';

import Footer from '../ft/Footer.js';

export default {
  title: 'FirestoneTires/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  hidden: true,
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
