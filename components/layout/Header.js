import React from 'react'
import Link from 'next/link';
import classes from './layout.module.css';


const Header = () => {
    return (
        <div className={classes.header}>
            <Link href="/">HOME</Link>
            <Link href="/posts">BLOG</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/projects">PROJECTS</Link>
        </div>
    )
}

export default Header
