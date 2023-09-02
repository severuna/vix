import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setEnglish, setUkrainian } from '../../../../store/actions/lang.actions.js';
import './LangBtns.css';

const LangBtns = () => {

    const [uaColor, setUaColor] = useState('yellow');

    const [engColor, setEngColor] = useState('white');

    const dispatch = useDispatch();

    const selectUA = (e) => {

        e.preventDefault();

        dispatch(setUkrainian('ua'));

        setUaColor('yellow');

        setEngColor('white');

    }

    const selectENG = (e) => {

        e.preventDefault();

        dispatch(setEnglish('eng'));
        
        setUaColor('white');

        setEngColor('yellow');

    }

    return (
        <div className={`lang row`}>
            <button className={`lang-btn ${uaColor}`} onClick={(e) => selectUA(e)}>UA</button>
            <button className={`lang-btn ${engColor}`} onClick={(e) => selectENG(e)}>ENG</button>
        </div>
    );
};

export default LangBtns;