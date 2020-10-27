import React from 'react';
import './BodyTopContent.css';

function BodyTopContent() {
    return (
        <div className='body__topcontent'>
            <div className='waterMark'></div>
            <h1 className='promo'>TRY 'EM YOURSELF WITH UP TO $100 BACK</h1>
            <div className='subtext'>on a Firestone Visa&trade; Prepaid Card when you buy any 4 eligible Firestone tires.<br/>Offer valid 09.15.20 - 11.01.20. Restrictions Apply.</div>
            <div className='buttons'>
                <button className='leftbutton'>Learn More</button>
                <button className='rightbutton'>Shop For Tires</button>
            </div>
        </div>
    )
}

export default BodyTopContent
