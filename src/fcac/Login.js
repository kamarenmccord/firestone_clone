import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='login'>
            <div className='login__header'>
                <Link to='/'>Firestone
                <img
                    src='https://www.carlogos.org/tire-logos/firestone-shield-logo-1600x1600.png'
                    alt='sheild'
                />
                </Link>
            </div>
            <div className='loginbox'>
                <div className='links'>
                    <p>New here?</p>
                    <Link to='/newuser'><p>Create an account</p></Link>
                </div>

                <form className='loginform'>
                    <div className='logininfo'>
                        <p>Email: </p>
                        <input type='email' placeholder='email' />
                    </div>
 
                    <div className='logininfo'>
                        <p>Password: </p>
                        <input type='password' placeholder='password' />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
