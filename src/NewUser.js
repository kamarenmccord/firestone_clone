import React from 'react';
import './NewUser.css';
import { Link } from 'react-router-dom';

const NewUser = () => {
    return (
        <div className='newuser'>
            <div className='return'>
                <Link to='/'>
                    <p>Firestone</p>
                    <img
                        src='https://www.carlogos.org/tire-logos/firestone-shield-logo-1600x1600.png'
                        alt='sheild'
                    />
                </Link>
            </div>
            <form className='userform'>
                <div className='userinfo'>
                    <p>Email: </p>
                    <input type='email' placeholder='email' />
                </div>
                <div className='userinfo'>
                    <p>Email Verify: </p>
                    <input type='email' placeholder='verify' />
                </div>

                <div className='userinfo'>
                    <p>Password: </p>
                    <input type='password' placeholder='password' />
                </div>

                <div className='userinfo'>
                    <p>Password Verify: </p>
                    <input type='password' placeholder='verify' />
                </div>

                <button type='submit'>Create Account</button>
            </form>
        </div>
    )
}

export default NewUser
