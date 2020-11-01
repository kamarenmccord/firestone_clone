import React from 'react'
import './ClosingLists.css'

function ClosingLists() {
    return (
        <div className='closinglists'>
            <ul className='closinglists__ul'>
                <li><a href='https://www.firestonetire.com/brands/allseason'><img src='https://www.firestonetire.com/content/dam/bridgestone/consumer/fst/tire-images/All%20Season/allseason.jpg' alt='' />
                <div className='ul_wrapper'>
                <h4>ALL SEASONS</h4><p>BUILT TO LAST</p></div></a></li>

                <li><a href=''><img src='https://www.firestonetire.com/content/dam/bridgestone/consumer/fst/tire-images/Champion%20Fuel%20Fighter/champion.jpg' alt='' />
                <div className='ul_wrapper'>
                <h4>CHAMPION</h4><p>FUEL-EFFICIENT</p></div></a></li>
                
                <li><a href=''><img src='https://www.firestonetire.com/content/dam/bridgestone/consumer/fst/tire-images/destination-at/destination.jpg' alt='' />
                <div className='ul_wrapper'>
                <h4>DESTINATION</h4><p>ON OR OFF-ROAD</p></div></a></li>

                <li><a href=''><img src='https://www.firestonetire.com/content/dam/bridgestone/consumer/fst/tire-images/firehawk-indy-500/firehawk.jpg' alt='' />
                <div className='ul_wrapper'>
                <h4>FIREHAWK</h4><p>PERFORMANCE</p></div></a></li>

                <li><a href=''><img src='https://www.firestonetire.com/content/dam/bridgestone/consumer/fst/tire-images/transforce-at/transforce.jpg' alt='' />
                <div className='ul_wrapper'>
                <h4>TRANSFORCE</h4><p>WORKS HARD</p></div></a></li>

                <li><a href=''><img src='https://www.firestonetire.com/content/dam/bridgestone/consumer/fst/tire-images/winterforce/winterforce.jpg' alt='' />
                <div className='ul_wrapper'>
                <h4>WINTERFORCE</h4><p>WINTER TRACTION</p></div></a></li>

            </ul>
            <div className='closinglists__spacer' />
            <div className='cl__listscontainer'>
                <div className='cl__lists'>
                    <ul className='type'>
                        <h4>TIRES BY TYPE</h4>
                        <li><a href=''>Shop All Tires</a></li>
                        <li><a href=''>Shop By Make & Model</a></li>
                        <li><a href=''>All-Season Tires</a></li>
                        <li><a href=''>Summer Tires</a></li>
                        <li><a href=''>Winter Tires</a></li>
                        <li><a href=''>Truck Tires</a></li>
                        <li><a href=''>SUV Tires</a></li>
                        <li><a href=''>Passenger & Minivan Tires</a></li>
                        <li><a href=''>Crossover Tires Tires</a></li>
                        <li><a href=''>Off-Road Tires</a></li>
                        <li><a href=''>Mud Tires</a></li>
                        <li><a href=''>All-Terrain Tires</a></li>
                        <li><a href=''>Fuel Efficient Tires</a></li>
                        <li><a href=''>Tire Ratings and Reviews</a></li>

                    </ul>
                    <ul className='size'>
                        <h4>TIRES BY SIZE</h4>
                        <li><a href=''> 13" Tires</a></li>
                        <li><a href=''> 14" Tires</a></li>
                        <li><a href=''> 15" Tires</a></li>
                        <li><a href=''> 16" Tires</a></li>
                        <li><a href=''> 17" Tires</a></li>
                        <li><a href=''> 18" Tires</a></li>
                        <li><a href=''> 19" Tires</a></li>
                        <li><a href=''> 20" Tires</a></li>
                        <li><a href=''> 21" Tires</a></li>
                        <li><a href=''> 22" Tires</a></li>
                        <li><a href=''> All Tires</a></li>

                    </ul>
                    <ul className='support'>
                        <h4>SUPPORT</h4>
                        <li><a href=''>Tire Warranties</a></li>
                        <li><a href=''>Register Your Tires</a></li>
                        <li><a href=''>FAQ</a></li>
                        <li><a href=''>Retailer Certifications</a></li>
                        <li><a href=''>Credit Cards</a></li>
                        <li><a href=''>Terms Of Use</a></li>
                        <li><a href=''>Privacy Policy</a></li>
                        <li><a href=''>CA Privacy Policy</a></li>
                        <li><a href=''>Accessibility Statement</a></li>
                    </ul>
                    <ul className='info'>
                        <h4>COMPNAY INFORMATION</h4>
                        <li><a href=''>News</a></li>
                        <li><a href=''>Our Heritage</a></li>
                        <li><a href=''>Careers</a></li>
                        <li><a href=''>Sustainability</a></li>
                        <li><a href=''>Recall Information</a></li>
                        <li><a href=''>Firestone Racing</a></li>
                        <li><a href=''>Our Brands</a></li>
                    </ul>
                    <ul className='us'>
                        <h4>OUR TIRES</h4>
                        <li><a href=''>All Seasons</a></li>
                        <li><a href=''>Champion</a></li>
                        <li><a href=''>Destination</a></li>
                        <li><a href=''>Firehawk</a></li>
                        <li><a href=''>Transforce</a></li>
                        <li><a href=''>Winterforce</a></li>
                    
                    </ul>
                    <ul className='contact'>
                        <h4>CONTACT US</h4>
                        <li><a href=''>Click To Chat</a></li>
                        <li><a href=''>Email Us</a></li>
                        <li><a href='tel:18444084396' className='last phone'>Call us: 1 (844) 408-4396</a></li>
                    </ul>
                </div>
            </div>
            <span className='copywrite'>&copy; 2020 BRIDGESTONE AMERICAS TIRE OPERATIONS, LLC</span>
        </div>
    )
}

export default ClosingLists
