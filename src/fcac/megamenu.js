import React from 'react';
import './megamenu.css';
import TireLink from './TireLink';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import FcLogo from './FcLogo';

function Megamenu() {
    return (
        <div className='megamenu'>
            <ul>
                <li>
                    <FcLogo />
                </li>
                <li className='individual__li first'>
                    <div className='megamenu__title'>
                        <h4>TIRES</h4>
                        <div className='hiddenarrow'><KeyboardArrowDownIcon /></div>
                        <div className='megamenu__dropcontent'>
                            <div className='dropcontent tirecontent'>
                                <div className='tires_left'>
                                    <ul>
                                        <h3>SHOP FOR TIRES</h3>
                                        <li><a href=''>Shop Tires by Vehicle</a></li>
                                        <li><a href=''>Shop by Tire Size</a></li>
                                        <li><a href=''>Shop for Tires by Type</a></li>
                                        <li className='last'><a href=''>Tire warranties</a></li>
                                        <li className='image'>          
                                            <img
                                                src='https://assets.firestonecompleteautocare.com/content/dam/bsro/fcac/images/logos/90DayTryBuyTryLogo_Color.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png'
                                                alt='warranty seal'
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <div className='tires_right'>
                                    <h3>SHOP BY TIRE BRANDS</h3>
                                    <div className='tire_wrapper'>
                                        <TireLink
                                            link=''
                                            title='Firestone All Season'
                                            src='https://www.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/images/nav/FSAllSeason-sm-1.png'
                                        />
                                                                                                                        <TireLink
                                            link=''
                                            title='Blizzak'
                                            src='https://www.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/images/nav/BlizzakDMV1-sm.png'
                                        />
                                                                                                                        <TireLink
                                            link=''
                                            title='Destination'
                                            src='https://www.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/images/nav/DestinationLE2-sm.png'
                                        />
                                                                                                                        <TireLink
                                            link=''
                                            title='Ecopia'
                                            src='https://www.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/images/nav/EcopiaEP422-sm.png'
                                        />
                                                                                                                        <TireLink
                                            link=''
                                            title='DriveGuard'
                                            src='https://www.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/images/nav/DriveGuard-sm.png'
                                        />
                                                                                                                        <TireLink
                                            link=''
                                            title='Turanza'
                                            src='https://www.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/images/nav/TuranzaEL42-sm.png'
                                        />
                                                                                                                        <TireLink
                                            link=''
                                            title='Fuel Fighter'
                                            src='https://www.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/images/nav/ChampionHR-sm.png'
                                        />
                                                                                                                        <TireLink
                                            link=''
                                            title='Firehawk'
                                            src='https://www.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/images/nav/FirehawkAS-sm.png'
                                        />
                                                                                                                        <TireLink
                                            link=''
                                            title='PrimeWell'
                                            src='https://www.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/images/nav/ValeraHT-sm.png'
                                        />
                                                                                                                        <TireLink
                                            link=''
                                            title='Potenza'
                                            src='https://www.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/images/nav/PotenzaRE97AS-sm.png'
                                        />
                                                                                                                        <TireLink
                                            link=''
                                            title='Winterforce'
                                            src='https://www.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/images/nav/Winterforce2UV-sm.png'
                                        />
                                                                                                                        <TireLink
                                            link=''
                                            title='Dueler'
                                            src='https://www.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/images/nav/Dueler685HT-sm.png'
                                        />
                                        
                                    </div>
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
