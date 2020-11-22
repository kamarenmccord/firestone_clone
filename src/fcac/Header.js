import React from 'react';
import "./Header.css";
import Megamenu from './megamenu';
import dotenv from 'dotenv';
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
            <div className='megadiv'>
                <Megamenu />
            </div>
        </div>
    )
}

export default Header
