import React from 'react';
import './megamenu.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Megamenu() {
    return (
        <div className='megamenu'>
            <ul>
                <li className='fc_header_logo first'>
                    <img
                        className='logo'
                        src={process.env.FIRESTONELOGO}
                        alt='logo'
                    />
                </li>
                <li className='individual__li first'>
                    <div className='megamenu__title'>
                        <h4>TIRES</h4>
                        <div className='hiddenarrow'><KeyboardArrowDownIcon /></div>
                        <div className='megamenu__dropcontent'>
                            <div className='dropcontent'>
                                <span>This is a flex container</span>
                            </div>

                        </div>
                    </div>
                </li>

                <li className='individual__li'>
                    <div className='megamenu__title'>
                        <h4>AUTO REPAIR</h4>
                        <div className='hiddenarrow'><KeyboardArrowDownIcon /></div>
                        <div className='megamenu__dropcontent'>
                            <div className='dropcontent'>
                                <span> Flex container 2</span>
                            </div>

                        </div>
                    </div>
                </li>

                <li className='individual__li'>
                    <div className='megamenu__title'>
                        <h4>AUTO MAINTENANCE</h4>
                        <div className='hiddenarrow'><KeyboardArrowDownIcon /></div>
                        <div className='megamenu__dropcontent'>
                            <div className='dropcontent'>
                                <span> Flex container 3</span>
                            </div>

                        </div>
                    </div>
                </li>

                <li className='individual__li header4'>COUPONS</li> 
                <li className='individual__li header4'>FIND A STORE</li>
                <li className='individual__li header4'><ShoppingCartIcon /></li>
                <li className='searchbar'>
                    <p>Find Your Local Store:</p>
                    <div>
                        <input id='searchInput' placeholder='Zip Code'></input><button className='inputbutton'>Go</button>
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default Megamenu
