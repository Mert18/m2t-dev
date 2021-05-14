import React, {useState} from 'react';

import Header from "./Header.js";
import classes from './layout.module.css'

import {ThemeContext} from '../../lib/context.js';

export default function Default(props) {

    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>

            <div className={classes.lay} data-theme={theme}>
                <header className={classes.layhead}>
                    <Header />
                </header>
                <main className={classes.laymain}>
                    {props.children}
                </main>
            </div>

        </ThemeContext.Provider>
    );
}