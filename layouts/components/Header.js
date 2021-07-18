import React from "react";
import Link from "next/link";
import classes from "../styles/default.module.css";
import ThemeToggler from "./themeToggler";
import ColorToggler from "./colorToggler";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className={classes.header}>
      <div className={classes.header__title}>
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.53 49.88">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  className="cls-1"
                  d="M92,36.25a2.51,2.51,0,0,0-.19,1.12,1.54,1.54,0,0,0,.32,1,1.15,1.15,0,0,0,.89.37,2.38,2.38,0,0,0,1.9-1c.52-.64.88-1,1.06-1s.56.2.74.6A3.36,3.36,0,0,1,97,38.85a8.3,8.3,0,0,1-1.76,5.24,13.32,13.32,0,0,1-5.42,4.17,20.66,20.66,0,0,1-8.58,1.62q-6.12,0-9.74-2.82a9.36,9.36,0,0,1-3.7-7.56,21.45,21.45,0,0,1,1.66-7.7l5.1-13.35A5.74,5.74,0,0,0,75,16.5a2.44,2.44,0,0,0-.79-1.9,2.8,2.8,0,0,0-1.9-.69A5.15,5.15,0,0,0,69,15.3a11.65,11.65,0,0,0-3,4.36L61,36.25a2.51,2.51,0,0,0-.19,1.12,1.49,1.49,0,0,0,.33,1,1.11,1.11,0,0,0,.88.37,2.38,2.38,0,0,0,1.9-1c.52-.64.88-1,1.06-1s.56.2.74.6A3.36,3.36,0,0,1,66,38.85a8.3,8.3,0,0,1-1.76,5.24,13.32,13.32,0,0,1-5.42,4.17,20.66,20.66,0,0,1-8.58,1.62q-6.12,0-9.74-2.82a9.36,9.36,0,0,1-3.7-7.56,21.45,21.45,0,0,1,1.66-7.7l5.1-13.35A5.74,5.74,0,0,0,44,16.5a2.44,2.44,0,0,0-.79-1.9,2.8,2.8,0,0,0-1.9-.69,5.29,5.29,0,0,0-3.25,1.34,9.91,9.91,0,0,0-2.78,4.31L29.17,39.41a5.63,5.63,0,0,0-.37,1.94,3.1,3.1,0,0,0,.47,1.81,7.2,7.2,0,0,0,1.29,1.44,4.16,4.16,0,0,1,.93,1,1.31,1.31,0,0,1,.09,1.11,2.73,2.73,0,0,1-1.76,1.76,12.59,12.59,0,0,1-4.36.56H4.32a5.9,5.9,0,0,1-3.47-.79,1.9,1.9,0,0,1-.79-2.08,3.68,3.68,0,0,1,1.94-2,8.44,8.44,0,0,0,2.32-1.76A8.24,8.24,0,0,0,5.9,39.22l8.25-26.8a3.62,3.62,0,0,0,.19-1.29,2.58,2.58,0,0,0-.42-1.58,11.54,11.54,0,0,0-1.34-1.39,6,6,0,0,1-1.3-1.3,1.71,1.71,0,0,1-.1-1.48C11.56,4,13.5,2.71,17,1.62A37.41,37.41,0,0,1,28.06,0a10,10,0,0,1,7.19,2.5A8.75,8.75,0,0,1,37.8,9.37a22.07,22.07,0,0,1,8-7.33A20.67,20.67,0,0,1,55,0a12.47,12.47,0,0,1,8.76,3.11,11.73,11.73,0,0,1,3.76,8.11q4-6.3,8.53-8.76A20.49,20.49,0,0,1,85.92,0a12.43,12.43,0,0,1,9.13,3.43,12,12,0,0,1,3.48,8.9A17.76,17.76,0,0,1,97.6,18Z"
                />
              </g>
            </g>
          </svg>
        </Link>
      </div>

      <nav className={classes.header__nav}>
        <div
          className={
            router.pathname === "/about" ? classes.active : classes.linkbox
          }
        >
          <Link href="/about">ABOUT</Link>
        </div>

        <div
          className={
            router.pathname === "/tmi" ? classes.active : classes.linkbox
          }
        >
          <Link href="/tmi">TMI</Link>
        </div>
        <div
          className={
            router.pathname === "/illustrations"
              ? classes.active
              : classes.linkbox
          }
        >
          <Link href="/illustrations">ILLUSTRATIONS</Link>
        </div>
        <div className={classes.colors}>
          <ColorToggler />
        </div>
        <div className={classes.toggler}>
          <ThemeToggler />
        </div>
      </nav>
    </header>
  );
};

export default Header;