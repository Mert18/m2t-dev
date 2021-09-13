import React from "react";
import classes from "../styles/default.module.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className={classes.headerhe}>
      <ul className={classes.routes}>
        <Link href="/">
          <li id={classes.home}>
            <Image src="/icons/home.svg" width="28px" height="28px" />
          </li>
        </Link>
        <Link href="/resume">
          <li>
            <Image src="/icons/resume-and-cv.svg" width="28px" height="28px" />
          </li>
        </Link>
        <Link href="/blog">
          <li>
            <Image src="/icons/blog.svg" width="28px" height="28px" />
          </li>
        </Link>
        <Link href="/projects">
          <li>
            <Image src="/icons/blueprint.svg" width="28px" height="28px" />
          </li>
        </Link>
        <Link href="/tmi">
          <li>
            <Image src="/icons/info-button.svg" width="28px" height="28px" />
          </li>
        </Link>
        <Link href="/illustrations">
          <li>
            <Image src="/icons/nodes.svg" width="28px" height="28px" />
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
