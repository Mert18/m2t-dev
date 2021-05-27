
import React, { useContext} from 'react'
import {ThemeContext} from '../../lib/context';
import Image from 'next/image';
import classes from './layout.module.css';


const ThemeToggler = () => {

    const {theme, setTheme} = useContext(ThemeContext);


    const handleThemeToggle = (e) => {
        e.preventDefault();
        setTheme(theme === 'light'? 'dark' : 'light');
      }
      
    return (
        <button className={classes.themeToggler} onClick={handleThemeToggle}>
            <span role="img" aria-label="switch theme">
              {theme === 'light'? (
                <Image src="/images/icons/sleep-mode.svg" width="35px" height="35px" alt="moon pic" />
              ) : (
                <Image src="/images/icons/brightness.svg" width="35px" height="35px" alt="sun pic" />
              )}
            </span>
        </button>
    )
}

export default ThemeToggler
