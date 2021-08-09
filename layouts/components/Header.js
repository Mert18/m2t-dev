import React from "react";
import classes from "../styles/default.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.routes}>
        <Link href="/">
          <li id={classes.home}>Home</li>
        </Link>
        <Link href="/resume">
          <li id={classes.resume}>Resume</li>
        </Link>
        <Link href="/blog">
          <li id={classes.blog}>Blog</li>
        </Link>
        <Link href="/projects">
          <li id={classes.projects}>Projects</li>
        </Link>
        <Link href="/tmi">
          <li id={classes.tmi}>Tmi</li>
        </Link>
        <Link href="/illustrations">
          <li id={classes.ills}>Illustrations</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
