
import React, { useState, useEffect } from 'react';
import classes from '../styles/default.module.css';

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
        <header className={classes.burger}>
            <Hamburger toggled={isOpen} toggle={handleClick} />

            {isOpen ? (
                <section className={classes.burger__menu}>
                    <header className={classes.burger__menu__toggler}>
                        <ThemeToggler />
                    </header>

                    <nav className={classes.burger__menu__nav}>
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
                    </nav>
                </section>
            ) :
            (
                <div></div>
            )
            }
            
        </header>
           
    )
}

export default HamburgerMenu
