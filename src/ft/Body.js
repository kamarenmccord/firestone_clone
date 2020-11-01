import React from 'react';
import './Body.css';
import BodyTopContent from './BodyTopContent';
import FindaStore from './FindaStore';
import TirePromo  from './TirePromo';
import ClosingLists from './ClosingLists';

function Body() {
    return (
        <div className='body'>
            <div className='body__spacer' />
            <BodyTopContent />
            <div className='body__spacer' />
            <FindaStore />
            <div className='body__spacer' />
            <TirePromo />
            {/* end spacer built into TirePromo */}
            <ClosingLists />
            {/* footer */}
        </div>
    )
}

export default Body
