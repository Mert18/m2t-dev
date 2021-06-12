import React, {useContext} from 'react';
import {ColorContext} from '../../lib/context';
import classes from './layout.module.css';

const colorToggler = () => {

    const {color, setColor} = useContext(ColorContext);

    return (
        <>
            <button className={classes.y} onClick={(e) => {e.preventDefault(), setColor('first')}}></button>
            <button className={classes.g} onClick={(e) => {e.preventDefault(), setColor('second')}}></button>
            <button className={classes.r} onClick={(e) => {e.preventDefault(), setColor('third')}}></button>
        </>
    )
}

export default colorToggler
