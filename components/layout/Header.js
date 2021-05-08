import React from 'react'
import Link from 'next/link';
import classes from './layout.module.css';


const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__title}>
                <div>
                    <Link href="/">Mert Uygur</Link>
                </div>
            </div>

            <div className={classes.header__nav}>
                <div>
                    <Link href="/posts">BLOG</Link>
                </div>
                
                <div>
                    <Link href="/about">HAKKIMDA</Link>
                </div>

                <div>
                    <Link href="/projects">PROJELER</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Header
