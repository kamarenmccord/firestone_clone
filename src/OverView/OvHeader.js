import React from 'react'
import "./OvHeader.css";

function OvHeader() {
    return (
        <div className='ovheader'>
            <div className='ovheader__left'>
                <h2>Firestone</h2>
            </div>
            <div className='ovheader__logo'>
                <img
                    src='https://www.firestone.com/etc/designs/bridgestone/consumer/fst/clientlibs/global/images/global/shield.png'
                    alt='Red Shield with emblazened F'
                />
            </div>
            <div className='ovheader__right'>
                <h3>FIRESTONE COMPANIES</h3>
            </div>
        </div>
    )
}

export default OvHeader
