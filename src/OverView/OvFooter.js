import React from 'react'
import './OvFooter.css';

function OvFooter() {
    return (
        <div className='ovfooter'>
            <div className='ovfooter__nav'>
                <div className='ovfooter__navprivacy nav'>
                    Privacy
                </div>
                <div className='ovfooter__navfullsite nav'>
                    Full Site
                </div>
            </div>
            <span className='copywrite'>© 2016 Bridgestone Americas Tire Operations, LLC</span>
        </div>
    )
}

export default OvFooter
