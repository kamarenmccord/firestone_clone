import React from 'react'
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';


function Footer() {
    return (
        <div className='footer'>
            <h1>Firestone</h1>
            <div className='icons'>
                <a href='https://www.facebook.com/FirestoneTires'><FacebookIcon /></a>
                <a href='https://www.twitter.com/FirestoneTires'><TwitterIcon /></a>
                <a href='https://www.youtube.com/user/TheFirestoneTire'><YouTubeIcon /></a>
                <a href='https://www.instagram.com/FirestoneTires'><InstagramIcon /></a>
            </div>
        </div>
    )
}

export default Footer
