import React from 'react';
import "./OverViewHome.css";
import OvHeader from './OvHeader';
import OvMain from './OvMain';
import OvAdds from './OvAdds';
import FirestoneLogo from './FirestoneLogo';

function OverViewHome() {
    return (
        <div className='overviewhome'>
            <OvHeader />
            <OvMain />
            <OvAdds />
            <FirestoneLogo />
        </div>
    )
}

export default OverViewHome
