import React from 'react';
import "./SubHeader.css";

const SubHeader = () => {
    return (
        <div className='subheader'>
            <div className='subheader_wrapper'>
                <div className='subheader_left'>
                    <img
                        src='https://assets.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/merch-content/2020/november/fcac-web-fsdestination-nov20-des-844x436-merch-1.jpg'
                        alt=''
                    />
                </div>
                <div className='subheader_right'>
                    <div className='upper'>
                        <img
                            src='https://assets.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/merch-content/2020/november/fcac-web-oilcurbside-nov20-des-464x210-merch-2.jpg'
                            alt=''
                        />
                    </div>
                    <div className='lower'>
                        <img
                            src='https://assets.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/merch-content/2020/november/fcac-web-batterytest-nov20-des-464x210-merch-3.jpg'
                            alt=''
                        />
                    </div>
                </div>
            </div>
                <div className='quotebox'>
                <span className='quote_of_the_day'>"THE CARE AND CONCERN THE EMPLOYEES TOOK AMID THE COVID-19 PANDEMIC SHOWED JUST HOW IMPORTANT CUSTOMERS AND EMPLOYEES ARE TO FIRESTONE. KUDOS."</span><p>Firestone Complete Auto Care Customer</p>
            </div>
        </div>
    )
}

export default SubHeader
