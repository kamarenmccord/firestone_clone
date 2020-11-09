import React from 'react';
import "./Header.css";
import Megamenu from './megamenu';
import dotenv from 'dotenv';
import Body from './Body';
dotenv.config();

function Header() {
    return (
        <div className='fc_header'>
            <ul className='fc_header__nav'>
                <li className='first'>Schedule an Appointment</li>
                <li>Contact Us</li>
                <li>Create an Account</li>
                <li className='last'>Sign In</li>
            </ul>
            <Megamenu />
            <Body />
        </div>
    )
}

export default Header
