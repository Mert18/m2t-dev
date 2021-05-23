
import React from 'react';
import Link from 'next/link';
import classes from './layout.module.css';
import ThemeToggler from './themeToggler';


const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__title}>
                <div className={classes.linkbox}>
                    <Link href="/"><span data-content="Link Hover" aria-hidden="true"></span>Mert Uygur</Link>
                </div>
            </div>

            <div className={classes.toggler}>
                <ThemeToggler />
            </div>

            <div className={classes.header__nav}>
                <div className={classes.linkbox}>
                    <Link href="/tmi"><span data-content="Link Hover" aria-hidden="true"></span>TMI</Link>
                </div>

                <div className={classes.linkbox}>
                    <Link href="/posts"><span data-content="Link Hover" aria-hidden="true"></span>BLOG</Link>
                </div>
                
                <div className={classes.linkbox}>
                    <Link href="/about"><span data-content="Link Hover" aria-hidden="true"></span>ABOUT</Link>
                </div>

                <div className={classes.linkbox}>
                    <Link href="/projects"><span data-content="Link Hover" aria-hidden="true"></span>PROJECTS</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Header
