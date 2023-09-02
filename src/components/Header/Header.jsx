import React from 'react';
import './Header.css';
import logo from '../../assets/img/logo.svg';
import Nav from './Nav/Nav';

const Header = () => {
    return (
        <header className='header col'>
            <div className='header-head row'>
                <img src={logo} alt='logo' className='logo' />
                <Nav />
            </div>
        </header>
    );
};

export default Header;