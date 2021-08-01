import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import classes from "./styles/default.module.css";

import { ThemeContext, ColorContext } from "../lib/context";
import HamburgerMenu from "./components/HamburgerMenu.js";

import useWindowDimensions from "./components/useWindowDimensions.js";

export default function Default(props) {
  const [theme, setTheme] = useState("dark");
  const [color, setColor] = useState("first");

  const { height, width } = useWindowDimensions();

  const [widthD, setwidthD] = useState(0);

  useEffect(() => {
    setwidthD(width);
  }, [width]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ColorContext.Provider value={{ color, setColor }}>
        <div className={classes.lay} data-theme={theme} color-palette={color}>
          <header className={classes.layhead}>
            {widthD < 800 ? <HamburgerMenu /> : <Header />}
            <div className={classes.particles}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </div>
          </header>

          <main className={classes.laymain}>{props.children}</main>
          <footer className={classes.layfoot}>
            <Footer />
          </footer>
        </div>
      </ColorContext.Provider>
    </ThemeContext.Provider>
  );
}
