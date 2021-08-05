import React from "react";
import classes from "../styles/default.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <ul className={classes.routes}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/tmi">Tmi</Link>
        </li>
        <li>
          <Link href="/illustrations">Illustrations</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
