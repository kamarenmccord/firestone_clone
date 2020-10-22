import React from 'react';

import OvMain from '../OverView/OvMain';

export default {
    title: "OverView/OvMain",
    componet: OvMain,
};

const Template = (args) => <OvMain {...args} />

export const DefaultState = Template.bind({});
DefaultState.args= {
    primary: true,
}