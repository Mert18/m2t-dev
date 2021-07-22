import React from "react";
import Link from "next/link";
import classes from "../styles/default.module.css";
import ThemeToggler from "./themeToggler";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <Link href="/">
          <h2>MERD</h2>
        </Link>
      </div>
      <nav className={classes.header__nav}>
        <Link href="/about">ABOUT</Link>
        <Link href="/projects">PROJECTS</Link>
        <Link href="/tmi">TMI</Link>
        <Link href="/illustrations">ILLS</Link>
      </nav>

      <div className={classes.toggler}>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
