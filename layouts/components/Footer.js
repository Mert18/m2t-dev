
import React, {useContext}  from 'react';
import classes from '../styles/default.module.css';
import {ColorContext} from '../../lib/context';


const Footer = () => {

    const {color, setColor} = useContext(ColorContext);

    return (
        <section className={classes.footer}>
            <main className={classes.footer__source}>
                <a href='https://github.com/Mert18/merd-dev' target='_blank' rel='noreferrer'>Source Code</a>
            </main>
        </section>
    )
}

export default Footer
