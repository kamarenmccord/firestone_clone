import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                        <input type='email' value={email} onChange={(event)=> setEmail(event.target.value)} placeholder='email' />
                    </div>
 
                    <div className='logininfo'>
                        <p>Password: </p>
                        <input type='password' value={password} onChange={(event)=> setPassword(event.target.value)} placeholder='password' />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
