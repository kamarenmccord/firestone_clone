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
                                    <div className='repairlist'>
                                        <div className='upperDiv'>
                                            <span>Brakes</span>
                                            <span>Alignment</span>
                                            <span>Engine Repair Services</span>
                                        </div>
                                        <div className='lowerDiv'>
                                            <span>Tire Repair</span>
                                            <span>Services</span>
                                            <span>Steering & Suspension</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='right_content'>
                                    <h3>SCHEDULE REPAIR SERVICES ONLINE</h3>
                                    <p>You can save time in the store by pre-booking your repair service appointment online today. We'll take it from there. 
                                    </p>
                                    <a href='https://www.firestonecompleteautocare.com/appointment/schedule-appointment/'>SCHEDULE AN APPOINTMENT</a>
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
                                        <h3>FIND MAINTENANCE SERVICES</h3>
                                        <div className='upperDiv'>
                                            <span>Batteries</span>
                                            <span>Oil</span>
                                            <span>Tune-Up</span>
                                        </div>
                                        <div className='upperMidDiv'>
                                            <span>AC Service</span>
                                            <span>Transmission</span>
                                            <span>Free Vehicle Inspections</span>
                                        </div>
                                        <div className='lowerMidDiv'>
                                            <span>Radiator</span>
                                            <span>Service Warranty Options</span>
                                            <span>Scheduled Maintenance</span>
                                        </div>
                                        <div className='lowerDiv'>
                                            <span>Drivetrain</span>
                                            <span>Wipers Blades</span>
                                        </div>
                                    </div>
                                <div className='right_content'>
                                    <h3>SCHEDULE MAINTENANCE SERVICES ONLINE</h3>
                                    <p>You can save time in the store by pre-booking your maintenance service appointment online today. We'll take it from there. 
                                    </p>
                                    <a href='https://www.firestonecompleteautocare.com/appointment/schedule-appointment/'>SCHEDULE AN APPOINTMENT</a>
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
