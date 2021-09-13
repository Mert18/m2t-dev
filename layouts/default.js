import React, { useState, useEffect } from "react";
import Footer from "./components/Footer.js";
import classes from "./styles/default.module.css";
import Header from "./components/Header.js";
import useWindowDimensions from "./components/useWindowDimensions.js";
import { useRouter } from "next/router";

export default function Default(props) {
  const { height, width } = useWindowDimensions(1020);
  const [hambToggle, setHambToggle] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("home");
  useEffect(() => {
    if (router.asPath === "/") {
      setPath("home");
    } else if (router.asPath === "/resume") {
      setPath("resume");
    } else if (router.asPath === "/projects") {
      setPath("projects");
    } else if (router.asPath === "/tmi") {
      setPath("tmi");
    } else if (router.asPath === "/illustrations") {
      setPath("illustrations");
    } else if (router.asPath === "/blog") {
      setPath("blog");
    }
  }, [router]);

  return (
    <div className={classes.lay}>
      {width < 800 ? (
        <header className={classes.hamburgermenu}>
          <div
            className={classes.hamburger}
            onClick={() => setHambToggle(!hambToggle)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {hambToggle ? (
            <ul className={classes.menu}>
              <li>Home</li>
              <li>About</li>
              <li>Resume</li>
              <li>Projects</li>
              <li>Tmi</li>
              <li>Illustrations</li>
            </ul>
          ) : (
            ""
          )}
        </header>
      ) : (
        <Header />
      )}
      <main className={classes.laymain}>{props.children}</main>
      <footer className={classes.layfoot}>
        <Footer />
      </footer>
    </div>
  );
}
