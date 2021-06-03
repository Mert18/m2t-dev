
import React, {useState, useEffect} from 'react';
import Header from "./Header.js";
import classes from './layout.module.css'

import {ThemeContext} from '../../lib/context.js';
import HamburgerMenu from './HamburgerMenu.js';

import useWindowDimensions from '../useWindowDimensions.js';

export default function Default(props) {

    const [theme, setTheme] = useState('dark');

    const { height, width } = useWindowDimensions();

    const [widthD, setwidthD] = useState(0);

    useEffect(() => {
        setwidthD(width)
    }, [width])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>

            <div className={classes.lay} data-theme={theme}>
                <div className={classes.layhead}>
                {widthD < 1100 ? 
                (
                    <HamburgerMenu />
                )

                : 
                (
                    <Header />
                )
                }
                </div>
                <main className={classes.laymain}>
                    {props.children}
                </main>
            </div>

        </ThemeContext.Provider>
    );
}