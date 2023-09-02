import React from 'react';
import './Header.css';
import logo from '../../assets/img/logo.svg';
import Nav from './Nav/Nav';
import { useSelector } from 'react-redux';

const Header = () => {

    const HEADER__LIST = useSelector((state) => state.lang.header);

    return (
        <header className='header col'>
            <div className='header-head row'>
                <img src={logo} alt='logo' className='logo' />
                <Nav />
            </div>
            <div className='header-content row'>
                <div className='header-text col'>
                    <h2 className='header-title'><b>{HEADER__LIST.title[0]}</b> <span>{HEADER__LIST.title[1]}</span> <b>{HEADER__LIST.title[2]}</b> <span>{HEADER__LIST.title[3]}</span></h2>
                    <div className='header-text__more col'>
                        <p className='header-subtitle'>{HEADER__LIST.subtitle}</p>
                    </div>
                </div>
                <div className='header-banner'><h2>VODOPOLOVA VIKTORIA</h2></div>
            </div>
        </header>
    );
};

export default Header;