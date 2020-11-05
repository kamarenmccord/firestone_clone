import React from 'react';
import "./Header.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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

            <div className='fc_header__main'>
                <img
                    className='logo'
                    src={process.env.FIRESTONELOGO}
                    alt='logo'
                />
                <div class="dropdown">
                    <button class="dropbtn">TIRES</button>
                    <div class="dropdown-content">
                        Content
                        some other content and then sum
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">AUTO REPAIR</button>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">AUTO MAINTENANCE</button>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div> 
                <span>COUPONS</span>
                <span>FIND A STORE</span>
                <span className='last'><ShoppingCartIcon /></span>
                <div className='searchbar'>
                    <p>Find Your Local Store:</p>
                    <input id='searchInput' placeholder='Zip Code'></input><button className='inputbutton'>Go</button>
                </div>
            </div>
        </div>
    )
}

export default Header
