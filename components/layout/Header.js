import React from 'react'
import Link from 'next/link';
import classes from './layout.module.css';


const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__title}>
                <h1>Mert Uygur</h1>
            </div>
            <div className={classes.header__nav}>
                <Link href="/">home</Link>
                <Link href="/posts">blog</Link>
                <Link href="/about">about</Link>
                <Link href="/projects">projects</Link>
            </div>
            
        </div>
    )
}

export default Header
