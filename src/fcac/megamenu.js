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
                            <div className='dropcontent tirecontent'>
                                <div className='mid_content'>
                                    <ul>
                                        <h3>SHOP FOR TIRES</h3>
                                        <li>Shop Tires by Vehicle</li>
                                        <li>Shop by Tire Size</li>
                                        <li>Shop for Tires by Type</li>
                                        <li className='last'>Tire warranties</li>
                                        <li className='image'>                                
                                            <img
                                                src='https://assets.firestonecompleteautocare.com/content/dam/bsro/fcac/images/logos/90DayTryBuyTryLogo_Color.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
                                                alt='warranty seal'
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <div className='right_content'>
                                    <h3>SHOP BY TIRE BRANDS</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </li>

                <li className='individual__li'>
                    <div className='megamenu__title'>
                        <h4>AUTO REPAIR</h4>
                        <div className='hiddenarrow'><KeyboardArrowDownIcon /></div>
                        <div className='megamenu__dropcontent'>
                            <div className='dropcontent repaircontent'>
                                <div className='mid_content'>
                                    <h3>FIND REPAIR SERVICES</h3>
                                    <ul className='repairlist'>
                                        <div className='upperDiv'>
                                            <li>Brakes</li>
                                            <li>Alignment</li>
                                            <li>Engine Repair Services</li>
                                        </div>
                                        <div className='lowerDiv'>
                                            <li>Tire Repair</li>
                                            <li>Services</li>
                                            <li>Steering & Suspension</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </li>

                <li className='individual__li'>
                    <div className='megamenu__title'>
                        <h4>AUTO MAINTENANCE</h4>
                        <div className='hiddenarrow'><KeyboardArrowDownIcon /></div>
                        <div className='megamenu__dropcontent'>
                            <div className='dropcontent maintenancecontent'>
                                <div className='mid_content'>

                                </div>
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
