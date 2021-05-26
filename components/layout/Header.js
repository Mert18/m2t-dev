
import React from 'react';
import Link from 'next/link';
import classes from './layout.module.css';
import ThemeToggler from './themeToggler';


const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__title}>
                <div className={classes.linkbox}>
                    <Link href="/">Mert Uygur</Link>
                </div>
            </div>

            <div className={classes.toggler}>
                <ThemeToggler />
            </div>

            <div className={classes.header__nav}>
                <div className={classes.linkbox}>
                    <Link href="/tmi">TMI</Link>
                </div>
                <div className={classes.linkbox}>
                    <Link href="/about">ABOUT</Link>
                </div>

                <div className={classes.linkbox}>
                    <Link href="/projects">PROJECTS</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Header
