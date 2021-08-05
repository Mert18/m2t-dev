import React from "react";
import classes from "../styles/default.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.routes}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/resume">
          <li>Resume</li>
        </Link>
        <Link href="/projects">
          <li>Projects</li>
        </Link>
        <Link href="/tmi">
          <li>Tmi</li>
        </Link>
        <Link href="/illustrations">
          <li>Illustrations</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
