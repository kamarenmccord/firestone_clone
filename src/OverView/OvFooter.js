import React from 'react'
import './OvFooter.css';

function OvFooter() {
    return (
        <div className='ovfooter'>
            <div className='ovfooter--small'>
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

            <div className='ovfooter--large'>
                <div className='ovfooter__nav'>
                    <ul className='upper_list'>
                        <li classname='listart'>Bridgestone Consumer Tires</li>
                        <li>Motorcycle Kart Tires</li>
                        <li>Tire Saftey</li>
                        <li>Bridgestone Golf</li>
                        <li className='liend'>Accessiblity Statement</li>
                    </ul>

                    <ul className='lower_list'>
                        <li className='listart'>Argentina</li>
                        <li>Australia</li>
                        <li>Brazil</li>
                        <li>Canada</li>
                        <li>Costa Rica</li>
                        <li>Europe</li>
                        <li>Japan</li>
                        <li className='liend'>Mexico</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OvFooter
