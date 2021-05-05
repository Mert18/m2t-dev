import React from 'react'
import Link from 'next/link';
import classes from './layout.module.css';


const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__title}>
                <h1>merd.dev</h1>
            </div>
            <div className={classes.header__nav}>
                <div>
                    <Link href="/">home</Link>
                </div>
                <div>
                    <Link href="/posts">blog</Link>
                </div>
                <div>
                <Link href="/about">about</Link>

                </div>
                <div>
                <Link href="/projects">projects</Link>
                </div>

                
            </div>
            
        </div>
    )
}

export default Header
