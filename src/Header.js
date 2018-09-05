import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
    <header>
        <h1>My React Test Flight</h1>
        <nav className='mainmenu'>
            <div className='menu__item'><Link to="/">Home</Link> </div>
            <div className='menu__item'><Link to="/auth/register">Register</Link></div>
            <div className='menu__item'><Link to="/auth/login">Login</Link></div>
            <div className='menu__item'><Link to="/profile">Profile</Link></div>
        </nav>
    </header>
)

export default Header