import React from 'react';
import './ButtonSpin.css';
import { useSelector } from 'react-redux';

const ButtonSpin = () => {

    const BUTTON_SPIN = useSelector((state) => state.lang.header.btn)
    return (
        <div className='spin col'>
            <div className='spin-circle'></div>
            <a href='#' className='text'>{BUTTON_SPIN}</a>
        </div>
    );
};

export default ButtonSpin;