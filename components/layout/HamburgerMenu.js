
import React, { useState } from 'react';
import classes from './layout.module.css';

import Hamburger from 'hamburger-react'
import ThemeToggler from './themeToggler';
import Link from 'next/link';


const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={classes.burger}>
            <Hamburger toggled={isOpen} toggle={handleClick} />

            {isOpen ? (
                <div className={classes.burger__menu}>
                    <div className={classes.burger__menu__toggler}>
                        <ThemeToggler />
                    </div>

                    <div className={classes.burger__menu__nav}>
                        <div className={classes.burger__menu__nav__item}>
                            <Link href="/">Mert Uygur</Link>
                        </div>
                        <div className={classes.burger__menu__nav__item}>
                            <Link href="/posts">BLOG</Link>
                        </div>
                        
                        <div className={classes.burger__menu__nav__item}>
                            <Link href="/about">ABOUT</Link>
                        </div>

                        <div className={classes.burger__menu__nav__item}>
                            <Link href="/projects">PROJECTS</Link>
                        </div>
                    </div>
                </div>
            ) :
            (
                <div></div>
            )
            }
            
        </div>
           
    )
}

export default HamburgerMenu
