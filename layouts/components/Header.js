import React from "react";
import Link from "next/link";
import classes from "../styles/default.module.css";
import ThemeToggler from "./themeToggler";
import { useRouter } from "next/router";
import ActiveLink from "../../components/ActiveLink.js";

const Header = ({ href }) => {
  const router = useRouter();
  const style = {
    color: router.asPath === href ? "red" : "black",
  };
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <ActiveLink activeClassName="active" href="/">
          <h2>MERD</h2>
        </ActiveLink>
      </div>
      <nav className={classes.header__nav}>
        <ActiveLink activeClassName="active" href="/about">
          ABOUT
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/blog">
          BLOG
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/projects">
          PROJECTS
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/tmi">
          TMI
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/illustrations">
          ILLS
        </ActiveLink>
      </nav>

      <div className={classes.toggler}>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
