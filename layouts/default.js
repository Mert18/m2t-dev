import React, { useState, useEffect } from "react";
import Footer from "./components/Footer.js";
import classes from "./styles/default.module.css";
import Header from "./components/Header.js";
import useWindowDimensions from "./components/useWindowDimensions.js";
import { useRouter } from "next/router";

export default function Default(props) {
  const { height, width } = useWindowDimensions(1020);
  const [hambToggle, setHambToggle] = useState(false);

  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const [bgColor, setBgColor] = useState("var(--primary)");
  useEffect(() => {
    setMounted(true);
    if (router.asPath === "/") {
      setBgColor("var(--primary)");
    } else if (router.asPath === "/resume") {
      setBgColor("var(--tertiary)");
    } else if (router.asPath === "/projects") {
      setBgColor("var(--flavor)");
    } else if (router.asPath === "/tmi") {
      setBgColor("var(--flavor2)");
    } else if (router.asPath === "/illustrations") {
      setBgColor("var(--flavor3)");
    } else if (router.asPath === "/blog") {
      setBgColor("var(--quarternary)");
    } else {
      setBgColor("#EEEEEE");
    }
  }, [router]);

  return (
    mounted && (
      <div className={classes.lay} style={{ backgroundColor: bgColor }}>
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
    )
  );
}
