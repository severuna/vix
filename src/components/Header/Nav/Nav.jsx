import React, { useState } from 'react';
import './Nav.css';
import { useSelector } from 'react-redux';
import burger_open from '../../../assets/img/burger_open.svg';
import burger_close from '../../../assets/img/burger_close.svg';
import LangBtns from './LangBtns/LangBtns';

const Nav = () => {

    const NAV_LIST = useSelector((state) => state.lang.nav);

    const [ visible, setVisible ] = useState('hidden');

    const [ hiddenBurger, setHiddenBurger ] = useState('active');

    const showNav = ( e ) => {
        e.preventDefault();
        setVisible('active');
        setHiddenBurger('hidden');
    }

    const hiddenNav = ( e ) => {
        e.preventDefault();
        setVisible('hidden');
        setHiddenBurger('active');
    }

    return (
        <nav className='nav col'>
            <button className={`burger-open ${hiddenBurger}`} onClick={(e) => showNav(e)}>
                <img src={burger_open} alt='burger open' className='burger-open__logo' />
            </button>
            <ul className={`nav-list col ${visible}`}>
                <li className='nav-list__item row'><div className='circle'/><a href='#'>{NAV_LIST[0]}</a></li>
                <li className='nav-list__item row'><div className='circle'/><a href='#'>{NAV_LIST[1]}</a></li>
                <li className='nav-list__item row'><div className='circle'/><a href='#'>{NAV_LIST[2]}</a></li>
                <li className='nav-list__item row'><div className='circle'/><a href='#'>{NAV_LIST[3]}</a></li>
                <li className='nav-list__item row'><div className='circle'/><a href='#'>{NAV_LIST[4]}</a></li>
                <li className='nav-list__item row'><div className='circle'/><a href='#'>{NAV_LIST[5]}</a></li>
                <LangBtns />
            </ul>
            <button className={`burger-close ${hiddenBurger === 'active' ? 'hidden' : 'active'}`} onClick={(e) => hiddenNav(e)}>
                <img src={burger_close} alt='burger close' className='burger-close__logo' />
            </button>
        </nav>
    );
};

export default Nav;