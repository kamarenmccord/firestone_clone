import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
// wheel
import AlbumIcon from '@material-ui/icons/Album';
// size
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
// type
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DateRangeIcon from '@material-ui/icons/DateRange';

function Header() {
    return (
        <div className='header'>
            <nav className='header__nav'>
                <p className='firstIcon'><MenuIcon /><span>Menu</span></p>
                <p><DirectionsCarIcon /></p>
                <p><AspectRatioIcon /></p>
                <p><AlbumIcon /></p>
                <p><CategoryRoundedIcon /></p>
                <p className='logo'><span className='logo'>FIRESTONE</span></p>
                <p><LocationOnIcon /></p>
                <p><DateRangeIcon /></p>
                <p className='text'><a href="tel:1-844-408-4396">Let's Talk</a></p>
                <p className='lastIcon text'><Link to='/login'>Sign In</Link></p>
            </nav>
        </div>
    )
}

export default Header
