import React, { useState, useEffect } from "react";
import Link from "next/link";
import classes from "./styles/container.module.css";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("Home");
  useEffect(() => {
    if (router.asPath === "/") {
      setCurrentPath("HOME");
    } else {
      let myroute = router.asPath
        .substring(1, router.asPath.length)
        .toUpperCase();
      setCurrentPath(myroute);
    }
  }, [router]);
  return (
    <header className={classes.header}>
      <Link href={router.asPath}>
        <a>
          <h1 className={classes.headerpath}>{currentPath}</h1>
        </a>
      </Link>

      <nav className={classes.navbar}>
        <ul className={classes.navbarlist}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <a>Resume</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/tmi">
              <a>Tmi</a>
            </Link>
          </li>
          <li>
            <Link href="/ills">
              <a>Ills</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
