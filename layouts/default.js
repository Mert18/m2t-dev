import React, { useState, useEffect, useRef } from "react";
import Footer from "./components/Footer.js";
import classes from "./styles/default.module.css";
import Header from "./components/Header.js";
import { ThemeContext, ColorContext } from "../lib/context";
import useWindowDimensions from "./components/useWindowDimensions.js";

export default function Default(props) {
  const [theme, setTheme] = useState("dark");
  const [color, setColor] = useState("first");
  const { height, width } = useWindowDimensions();

  const [hambToggle, setHambToggle] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ColorContext.Provider value={{ color, setColor }}>
        <div className={classes.lay} data-theme={theme} color-palette={color}>
          {width > 570 || width < 570 ? (
            <Header />
          ) : (
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
          )}
          <main className={classes.laymain}>{props.children}</main>
          <footer className={classes.layfoot}>
            <Footer />
          </footer>
        </div>
      </ColorContext.Provider>
    </ThemeContext.Provider>
  );
}
