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
    </header>
  );
};

export default Header;
