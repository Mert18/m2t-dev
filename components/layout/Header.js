
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import classes from './layout.module.css';
import ThemeToggler from './themeToggler';
import randomColor from 'randomcolor';

const Header = () => {

    const [color, setColor] = useState("black");
    const [colorTwo, setColorTwo] = useState("red");


    useEffect(() => {
        setTimeout(() => {
            setColor(randomColor());
            setColorTwo(randomColor());
        },4000)
    }, [color]);

    return (
        <div className={classes.header}>
            <div className={classes.shadow}>

            </div>

            <div className={classes.header__title}>
                <Link href="/">
                    <svg viewBox="0 0 168.55 113.85" className="logo">
                        <g>
                            <g>
                                <path fill={colorTwo}
                                    d="M0,4.64H0A14,14,0,0,1,14.05,18.69v4.82Q21.39,13.07,29.13,8.25A42.75,42.75,0,0,1,51.54,1.83,37.38,37.38,0,0,1,66.61,4.94a32.33,32.33,0,0,1,11.66,8.28Q82.79,18.4,86.11,28q7-12.85,17.52-19.53a41.44,41.44,0,0,1,22.63-6.67,35.35,35.35,0,0,1,20,5.72,34.08,34.08,0,0,1,12.87,16q4.2,10.23,4.2,30.71v59.63h0A14.36,14.36,0,0,1,149,99.49V54.22q0-17.56-2.5-24.14a21.77,21.77,0,0,0-8.56-10.59,25.57,25.57,0,0,0-14.45-4,31.49,31.49,0,0,0-18.66,6A34.66,34.66,0,0,0,92.43,37.56q-3.9,10-3.9,33.53v42.76h0a14.05,14.05,0,0,1-14-14.06V57.94q0-19.77-2.46-26.85a22.53,22.53,0,0,0-8.58-11.35,24.86,24.86,0,0,0-14.56-4.26,31.4,31.4,0,0,0-18.21,5.87A34.79,34.79,0,0,0,18.12,37.16q-4.07,9.95-4.07,30.41V99.8a14,14,0,0,1-14,14H0Z" />
                                <path fill={color}
                                    d="M5.23,2.81h0A14,14,0,0,1,19.28,16.86v4.82Q26.62,11.24,34.36,6.42A42.75,42.75,0,0,1,56.77,0,37.38,37.38,0,0,1,71.84,3.11,32.57,32.57,0,0,1,83.5,11.39Q88,16.56,91.34,26.2q7-12.85,17.52-19.52A41.48,41.48,0,0,1,131.49,0a35.43,35.43,0,0,1,20,5.72,34.18,34.18,0,0,1,12.87,16q4.2,10.25,4.21,30.72V112h0a14.36,14.36,0,0,1-14.36-14.35V52.4q0-17.57-2.5-24.14a21.72,21.72,0,0,0-8.55-10.59,25.55,25.55,0,0,0-14.46-4,31.49,31.49,0,0,0-18.66,6A34.64,34.64,0,0,0,97.67,35.73q-3.92,10.05-3.9,33.53V112h0A14.05,14.05,0,0,1,79.71,98V56.11q0-19.77-2.46-26.85a22.46,22.46,0,0,0-8.58-11.34,24.76,24.76,0,0,0-14.55-4.27A31.41,31.41,0,0,0,35.9,19.52,34.79,34.79,0,0,0,23.35,35.33q-4.07,9.95-4.07,30.42V98a14,14,0,0,1-14,14h0Z" />
                            </g>
                        </g>
                    </svg>
                </Link>
                    
            </div>

            <div className={classes.toggler}>
                <ThemeToggler />
            </div>

            <div className={classes.header__nav}>
                <div className={classes.linkbox}>
                    <Link href="/tmi">TMI</Link>
                </div>
                <div className={classes.linkbox}>
                    <Link href="/blog">BLOG</Link>
                </div>
                <div className={classes.linkbox}>
                    <Link href="/about">ABOUT</Link>
                </div>

                <div className={classes.linkbox}>
                    <Link href="/projects">PROJECTS</Link>
                </div>
                <div className={classes.linkbox}>
                    <Link href="/illustrations">ILLUSTRATIONS</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Header
