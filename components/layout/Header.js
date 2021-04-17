import React from 'react'
import Link from 'next/link';
import classes from './layout.module.css';

const Header = () => {
    return (
        <div className={classes.header}>
            <ul className={classes.nav}>
                <Link href="/"><span>ANA SAYFA</span></Link>
                <Link href="/posts"><span>BLOG</span></Link>
                <Link href="/about"><span>ABOUT</span></Link>
                <Link href="/projects"><span>PROJECTS</span></Link>
            </ul>
            <div className={classes.info}>
                <div className={classes.info__text}>
                    <h2>Mert Uygur</h2>
                </div>

                <div className={classes.hero__links}>
                    <a href="https://github.com/Mert18" target="_blank" rel="noreferrer">
                        <img src="/images/icons/icons8-github.svg" alt="github icon" width="40px" />
                    </a>
                    <a href="https://www.linkedin.com/in/mert-u-8248ab135/" target="_blank" rel="noreferrer">
                        <img src="/images/icons/icons8-linkedin.svg" alt="linkedin icon" width="40px" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
