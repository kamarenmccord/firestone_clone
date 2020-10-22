import React from 'react';
import "./OverViewHome.css";
import OvHeader from './OvHeader';
import OvMain from './OvMain';
import OvAdds from './OvAdds';
import FirestoneLogo from './FirestoneLogo';
import OvFooter from './OvFooter';

function OverViewHome() {
    return (
        <div className='overviewhome'>
            <OvHeader />
            <OvMain />
            <OvAdds />
            <FirestoneLogo />
            <OvFooter />
        </div>
    )
}

export default OverViewHome
