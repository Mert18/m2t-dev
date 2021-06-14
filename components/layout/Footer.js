
import React, {useContext}  from 'react';
import classes from './layout.module.css';
import {ColorContext} from '../../lib/context';


const Footer = () => {

    const {color, setColor} = useContext(ColorContext);

    return (
        <div className={classes.footer}>
            <div className={classes.footer__source}>
                <a href='https://github.com/Mert18/merd-dev' target='_blank' rel='noreferrer'>Source Code</a>
            </div>
        </div>
    )
}

export default Footer
