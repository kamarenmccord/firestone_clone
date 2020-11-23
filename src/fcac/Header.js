import React from 'react';
import "./Header.css";
import Megamenu from './megamenu';
import dotenv from 'dotenv';
import { Link } from 'react-router-dom';
dotenv.config();

function Header() {
    return (
        <div className='fc_header'>
            <ul className='fc_header__nav'>
                <li className='first'>Schedule an Appointment</li>
                <li>Contact Us</li>
                <li><Link to='/newuser'>Create an Account</Link></li>
                <li className='last'><Link to='/login'>Sign In</Link></li>
            </ul>
            <div className='megadiv'>
                <Megamenu />
            </div>
        </div>
    )
}

export default Header
