
import React, {useContext}  from 'react';
import classes from './layout.module.css';
import {ColorContext} from '../../lib/context';


const Footer = () => {

    const {color, setColor} = useContext(ColorContext);

    return (
        <div className={classes.footer}>
            <div className={classes.footer__colors}>
                <div className={classes.footer__colors__title}>
                    <h2>More Surprise Colors</h2>
                </div>
                <div className={classes.footer__colors__colors}>
                    <h2 onClick={(e) => {e.preventDefault(), setColor('sarcoline')}}>Sarcoline</h2>
                    <h2 onClick={(e) => {e.preventDefault(), setColor('thistle')}}>Thistle</h2>
                    <h2 onClick={(e) => {e.preventDefault(), setColor('tyrian')}}>Tyrian</h2>
                    <h2 onClick={(e) => {e.preventDefault(), setColor('azure')}}>Azure</h2>
                    <h2 onClick={(e) => {e.preventDefault(), setColor('fallow')}}>Fallow</h2>
                    <h2 onClick={(e) => {e.preventDefault(), setColor('sandstone')}}>Sandstone</h2>
                    <h2 onClick={(e) => {e.preventDefault(), setColor('viridian')}}>Viridian</h2>

                </div>
            </div>
        </div>
    )
}

export default Footer
