import React from 'react'
import Link from 'next/link';
import classes from './layout.module.css';

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.nav}>
                <Link href="/"><span>ANA SAYFA</span></Link>
                <Link href="/posts"><span>BLOG</span></Link>
                <Link href="/about"><span>ABOUT</span></Link>
            </div>
        </div>
    )
}

export default Header
