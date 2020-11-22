import React from 'react'
import Body from './Body';
import "./FirestoneComplete.css";
import Header from "./Header";
import SubHeader from './SubHeader';

function FirestoneComplete() {
    return (
        <div className='firestonecomplete'>
            <div className='image_wrapper'>
                <img
                    src='https://assets.firestonecompleteautocare.com/content/dam/bsro-sites/fcac/images/leaderboard-banner/fcac-web-ros-1440x70-des-covid19-mask.gif'
                    alt='banner_add'
                />
            </div>
            <Header />
            <Body />
            <SubHeader />
        </div>
    )
}

export default FirestoneComplete
