
import React, { useState, useEffect } from 'react';
import classes from './layout.module.css';

import Hamburger from 'hamburger-react'
import ThemeToggler from './themeToggler';
import Link from 'next/link';
import { useRouter } from 'next/router'


const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const router = useRouter();

    useEffect(() => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
    }, [router.asPath]);
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
                            <Link href="/">MERT UYGUR</Link>
                        </div>

                        <div className={classes.burger__menu__nav__item}>
                            <Link href="/tmi">TMI</Link>
                        </div>

                        <div className={classes.burger__menu__nav__item}>
                            <Link href="/blog">BLOG</Link>
                        </div>
                        
                        <div className={classes.burger__menu__nav__item}>
                            <Link href="/about">ABOUT</Link>
                        </div>

                        <div className={classes.burger__menu__nav__item}>
                            <Link href="/projects">PROJECTS</Link>
                        </div>
                        <div className={classes.burger__menu__nav__item}>
                            <Link href="/illustrations">ILLUSTRATIONS</Link>
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
