
import React, {useState, useEffect} from 'react';
import Header from "./Header.js";
import classes from './layout.module.css'

import {ThemeContext} from '../../lib/context.js';
import HamburgerMenu from './HamburgerMenu.js';

import useWindowDimensions from '../useWindowDimensions.js';

export default function Default(props) {

    const [theme, setTheme] = useState('light');

    const { height, width } = useWindowDimensions();

    const [widthD, setwidthD] = useState(0);

    useEffect(() => {
        setwidthD(width)
    }, [width])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>

            <div className={classes.lay} data-theme={theme}>
                <header className={classes.layhead}>
                {widthD < 650 ? 
                (
                    <HamburgerMenu />
                )

                : 
                (
                    <Header />
                )
                }
                </header>
                <main className={classes.laymain}>
                    {props.children}
                </main>

                <footer className={classes.footer}>
                    <div className={classes.footer__links}>
                        
                        <a href="https://github.com/mert18" target="_blank" rel="noreferrer"><img src="/images/icons/github.svg" width="50px" alt="github ic" /></a>
                        <a href="https://www.linkedin.com/in/mert-u-8248ab135/" target="_blank" rel="noreferrer"><img src="/images/icons/linkedin.svg" width="50px" alt="github ic" /></a>
                    </div>
                </footer>
            </div>

        </ThemeContext.Provider>
    );
}